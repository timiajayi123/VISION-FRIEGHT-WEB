import { Account, Client, Query, Storage, type Models } from "appwrite";

export const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
export const APPWRITE_PROJECT_ID = "6a9fa54800188b90c6d0";
export const CLEARED_MEDIA_BUCKET_ID = "cleared-media";
export const ADMIN_USER_ID = "vision-freight-admin";
export const ADMIN_EMAIL = "vfsn2021@gmail.com";
export const CLEARED_MEDIA_LIMIT = 1000;

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const storage = new Storage(client);

export async function listClearedMediaFiles(limit = CLEARED_MEDIA_LIMIT) {
  const files: Models.File[] = [];
  let cursor: string | undefined;

  while (files.length < limit) {
    const pageSize = Math.min(100, limit - files.length);
    const queries = [Query.limit(pageSize), Query.orderDesc("$createdAt")];

    if (cursor) queries.push(Query.cursorAfter(cursor));

    const page = await storage.listFiles({
      bucketId: CLEARED_MEDIA_BUCKET_ID,
      queries,
    });

    files.push(...page.files);

    if (page.files.length < pageSize || files.length >= page.total) break;
    cursor = page.files.at(-1)?.$id;
    if (!cursor) break;
  }

  return files;
}

