import { Account, Client, Storage } from "appwrite";

export const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
export const APPWRITE_PROJECT_ID = "6a9fa54800188b90c6d0";
export const CLEARED_MEDIA_BUCKET_ID = "cleared-media";
export const ADMIN_USER_ID = "vision-freight-admin";
export const ADMIN_EMAIL = "vfsn2021@gmail.com";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const storage = new Storage(client);

