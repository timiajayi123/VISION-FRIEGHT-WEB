"use client";

import { type FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { ID, Permission, Role, type Models } from "appwrite";
import { CheckCircle2, CloudUpload, LoaderCircle, LogIn, LogOut, Trash2 } from "lucide-react";
import { ClearedMediaCard } from "@/components/cleared-gallery";
import {
  account,
  ADMIN_EMAIL,
  ADMIN_USER_ID,
  CLEARED_MEDIA_BUCKET_ID,
  listClearedMediaFiles,
  storage,
} from "@/lib/appwrite";

const MAX_FILE_SIZE = 30 * 1024 * 1024;
const allowedExtensions = ["jpg", "jpeg", "png", "webp", "avif", "mp4", "webm", "mov"];

function messageFrom(error: unknown) {
  return error instanceof Error ? error.message : "Something went wrong. Please try again.";
}

export function AdminPanel() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [files, setFiles] = useState<Models.File[]>([]);
  const [checkingSession, setCheckingSession] = useState(true);
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const loadFiles = useCallback(async () => {
    setFiles(await listClearedMediaFiles());
  }, []);

  useEffect(() => {
    let active = true;

    async function restoreSession() {
      try {
        const current = await account.get();
        if (current.$id !== ADMIN_USER_ID || current.email.toLowerCase() !== ADMIN_EMAIL) {
          await account.deleteSession({ sessionId: "current" });
          throw new Error("This account is not authorised for the Vision Freight admin panel.");
        }

        if (active) {
          setUser(current);
          await loadFiles();
        }
      } catch (sessionError) {
        const status = typeof sessionError === "object" && sessionError && "code" in sessionError ? Number(sessionError.code) : 0;
        if (active && status !== 401) setError(messageFrom(sessionError));
      } finally {
        if (active) setCheckingSession(false);
      }
    }

    void restoreSession();
    return () => {
      active = false;
    };
  }, [loadFiles]);

  async function authenticate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthenticating(true);
    setError("");
    setNotice("");

    try {
      if (password.length < 8) throw new Error("Password must be at least 8 characters.");

      await account.createEmailPasswordSession({ email: ADMIN_EMAIL, password });
      const current = await account.get();

      if (current.$id !== ADMIN_USER_ID || current.email.toLowerCase() !== ADMIN_EMAIL) {
        await account.deleteSession({ sessionId: "current" });
        throw new Error("This account is not authorised for the Vision Freight admin panel.");
      }

      setUser(current);
      setPassword("");
      await loadFiles();
    } catch (authError) {
      setError(messageFrom(authError));
    } finally {
      setAuthenticating(false);
    }
  }

  async function uploadMedia(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    const file = inputRef.current?.files?.[0];
    if (!file) {
      setError("Choose an image or video first.");
      return;
    }

    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!allowedExtensions.includes(extension)) {
      setError("Use JPG, PNG, WebP, AVIF, MP4, WebM or MOV.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("The file must be 30 MB or smaller.");
      return;
    }

    setUploading(true);
    setProgress(0);
    try {
      await storage.createFile({
        bucketId: CLEARED_MEDIA_BUCKET_ID,
        fileId: ID.unique(),
        file,
        permissions: [
          Permission.read(Role.any()),
          Permission.update(Role.user(ADMIN_USER_ID)),
          Permission.delete(Role.user(ADMIN_USER_ID)),
        ],
        onProgress: (upload) => setProgress(Math.round(upload.progress)),
      });
      if (inputRef.current) inputRef.current.value = "";
      await loadFiles();
      setNotice("Published as Cleared.");
    } catch (uploadError) {
      setError(messageFrom(uploadError));
    } finally {
      setUploading(false);
    }
  }

  async function removeMedia(file: Models.File) {
    if (!window.confirm(`Remove ${file.name} from the cleared gallery?`)) return;
    setError("");
    setNotice("");
    try {
      await storage.deleteFile({ bucketId: CLEARED_MEDIA_BUCKET_ID, fileId: file.$id });
      setFiles((current) => current.filter((item) => item.$id !== file.$id));
      setNotice("Media removed.");
    } catch (deleteError) {
      setError(messageFrom(deleteError));
    }
  }

  async function signOut() {
    await account.deleteSession({ sessionId: "current" });
    setUser(null);
    setFiles([]);
    setNotice("Signed out.");
  }

  if (checkingSession) {
    return <div className="flex min-h-72 items-center justify-center"><LoaderCircle aria-hidden="true" className="size-7 animate-spin text-orange" /><span className="sr-only">Checking secure session</span></div>;
  }

  if (!user) {
    return (
      <section className="mx-auto max-w-xl rounded-lg border border-slate-200 bg-white p-7 text-center shadow-[0_18px_55px_rgb(8_42_74/9%)] sm:p-10">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-orange/10 text-orange"><LogIn aria-hidden="true" className="size-6" /></span>
        <h2 className="mt-5 text-2xl font-extrabold text-navy">Owner sign in</h2>
        <p className="mt-3 leading-7 text-slate-600">Enter the admin password to manage the cleared vehicle gallery.</p>

        <form className="mt-7 grid gap-4 text-left" onSubmit={authenticate}>
          <label className="form-label">
            Password
            <input className="form-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} required autoComplete="current-password" placeholder="Enter password" />
          </label>
          <button type="submit" className="button-primary mt-2 w-full" disabled={authenticating}>
            {authenticating ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : <LogIn aria-hidden="true" className="size-4" />}
            {authenticating ? "Please wait…" : "Sign in"}
          </button>
        </form>
        {notice ? <p className="mt-5 rounded-md bg-emerald-50 p-4 text-sm font-semibold text-emerald-800" role="status">{notice}</p> : null}
        {error ? <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700" role="alert">{error}</p> : null}
      </section>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgb(8_42_74/8%)] sm:p-9">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow text-orange">Cleared Gallery</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">Add an image or video</h2>
            <p className="mt-3 text-slate-600">One file at a time, up to 30 MB.</p>
          </div>
          <button type="button" onClick={signOut} className="button-secondary shrink-0"><LogOut aria-hidden="true" className="size-4" />Sign out</button>
        </div>

        <form className="mt-8 grid gap-5" onSubmit={uploadMedia}>
          <label className="form-label">
            Image or short video
            <input ref={inputRef} className="form-input cursor-pointer file:mr-4 file:rounded-sm file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-bold file:text-white" type="file" accept=".jpg,.jpeg,.png,.webp,.avif,.mp4,.webm,.mov,image/jpeg,image/png,image/webp,image/avif,video/mp4,video/webm,video/quicktime" disabled={uploading} />
          </label>
          {uploading ? (
            <div aria-live="polite">
              <div className="mb-2 flex justify-between text-sm font-bold text-navy"><span>Uploading</span><span>{progress}%</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-orange transition-[width]" style={{ width: `${progress}%` }} /></div>
            </div>
          ) : null}
          <button className="button-primary sm:w-fit" type="submit" disabled={uploading}>
            {uploading ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : <CloudUpload aria-hidden="true" className="size-4" />}
            {uploading ? "Publishing…" : "Publish as Cleared"}
          </button>
        </form>

        {notice ? <p className="mt-5 flex items-center gap-2 rounded-md bg-emerald-50 p-4 text-sm font-semibold text-emerald-800" role="status"><CheckCircle2 aria-hidden="true" className="size-4" />{notice}</p> : null}
        {error ? <p className="mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700" role="alert">{error}</p> : null}
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div><p className="eyebrow text-orange">Published</p><h2 className="mt-2 text-2xl font-extrabold text-navy">Cleared vehicles</h2></div>
          <span className="text-sm font-bold text-slate-500">{files.length} {files.length === 1 ? "item" : "items"}</span>
        </div>
        {files.length === 0 ? (
          <p className="mt-6 rounded-md border border-slate-200 bg-white p-6 text-slate-600">Nothing has been published yet.</p>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file) => (
              <div key={file.$id}>
                <ClearedMediaCard file={file} compact />
                <button type="button" onClick={() => removeMedia(file)} className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-red-200 bg-white px-4 py-2 text-sm font-bold text-red-700 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><Trash2 aria-hidden="true" className="size-4" />Remove</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
