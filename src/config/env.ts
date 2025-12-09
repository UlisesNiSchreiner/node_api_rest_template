import dotenv from "dotenv";

let loaded = false;

export function loadEnv(): void {
  if (loaded) return;
  dotenv.config();
  loaded = true;
}

export interface Env {
  MONGO_URI: string;
  MONGO_DB_NAME: string;
  MONGO_USERS_COLLECTION: string;
}

export function getEnv(): Env {
  const { MONGO_URI, MONGO_DB_NAME, MONGO_USERS_COLLECTION } = process.env;

  if (!MONGO_URI) throw new Error("MONGO_URI is not set");
  if (!MONGO_DB_NAME) throw new Error("MONGO_DB_NAME is not set");
  if (!MONGO_USERS_COLLECTION) throw new Error("MONGO_USERS_COLLECTION is not set");

  return {
    MONGO_URI,
    MONGO_DB_NAME,
    MONGO_USERS_COLLECTION,
  };
}