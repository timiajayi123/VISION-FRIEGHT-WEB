"use client";

import { useEffect, useState } from "react";
import { Query, type Models } from "appwrite";
import { ImageIcon, Play } from "lucide-react";
import { CLEARED_MEDIA_BUCKET_ID, storage } from "@/lib/appwrite";
import { SectionHeading } from "@/components/section-heading";

function mediaUrl(fileId: string) {
  return storage.getFileView({ bucketId: CLEARED_MEDIA_BUCKET_ID, fileId });
}

export function ClearedMediaCard({ file, compact = false }: { file: Models.File; compact?: boolean }) {
  const isVideo = file.mimeType.startsWith("video/");
  const label = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") || "Cleared vehicle";

  return (
    <article className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_12px_35px_rgb(8_42_74/7%)]">
      <div className={`relative overflow-hidden bg-slate-950 ${compact ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
        {isVideo ? (
          <video className="size-full object-cover" controls playsInline preload="metadata" aria-label={`Cleared vehicle video: ${label}`}>
            <source src={mediaUrl(file.$id)} type={file.mimeType} />
          </video>
        ) : (
          // Appwrite supplies the uploaded asset directly; dimensions are reserved by the wrapper.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={mediaUrl(file.$id)} alt={`Cleared vehicle: ${label}`} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.12em] text-white shadow-lg">
          {isVideo ? <Play aria-hidden="true" className="size-3" fill="currentColor" /> : <ImageIcon aria-hidden="true" className="size-3.5" />}
          Cleared
        </span>
      </div>
    </article>
  );
}

export function ClearedGallery() {
  const [files, setFiles] = useState<Models.File[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    storage
      .listFiles({ bucketId: CLEARED_MEDIA_BUCKET_ID, queries: [Query.limit(60)] })
      .then((result) => {
        if (active) {
          setFiles([...result.files].sort((a, b) => b.$createdAt.localeCompare(a.$createdAt)));
        }
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="cleared-vehicles" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <div className="site-container">
        <SectionHeading eyebrow="Recent Work" title="Vehicles We Have Cleared" description="A selection of vehicles handled by Vision Freight." />

        {loading ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading cleared vehicles">
            {[0, 1, 2].map((item) => <div key={item} className="aspect-[5/4] animate-pulse rounded-md bg-slate-100" />)}
          </div>
        ) : error ? (
          <p className="mt-8 rounded-md border border-slate-200 bg-cream p-5 text-slate-600">The cleared vehicle gallery is temporarily unavailable.</p>
        ) : files.length === 0 ? (
          <p className="mt-8 rounded-md border border-slate-200 bg-cream p-5 text-slate-600">New cleared vehicles will appear here.</p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file) => <ClearedMediaCard key={file.$id} file={file} />)}
          </div>
        )}
      </div>
    </section>
  );
}

