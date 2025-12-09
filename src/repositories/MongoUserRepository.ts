import { MongoClient, type Collection } from "mongodb";

import type { User } from "../types/User";
import type { UserRepository } from "./UserRepository";
import { getEnv } from "../config/env";

interface UserDocument {
  _id: string;
  email: string;
  name: string;
}

export class MongoUserRepository implements UserRepository {
  private collection: Collection<UserDocument>;

  private constructor(collection: Collection<UserDocument>) {
    this.collection = collection;
  }

  static async create(): Promise<MongoUserRepository> {
    const { MONGO_URI, MONGO_DB_NAME, MONGO_USERS_COLLECTION } = getEnv();

    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db(MONGO_DB_NAME);
    const collection = db.collection<UserDocument>(MONGO_USERS_COLLECTION);

    return new MongoUserRepository(collection);
  }

  async findAll(): Promise<User[]> {
    const docs = await this.collection.find({}).toArray();
    return docs.map((doc) => ({
      id: doc._id,
      email: doc.email,
      name: doc.name,
    }));
  }
}