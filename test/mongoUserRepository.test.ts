import { vi, describe, it, expect, beforeEach } from "vitest";

vi.mock("mongodb", () => {
  const mockToArray = vi.fn();
  const mockFind = vi.fn(() => ({ toArray: mockToArray }));
  const mockCollection = { find: mockFind } as any;
  const mockDb = { collection: vi.fn(() => mockCollection) } as any;
  const mockClient = { db: vi.fn(() => mockDb) } as any;
  const connectMock = vi.fn(async () => mockClient);
  return {
    MongoClient: {
      connect: connectMock,
    },
    __mocks: {
      connectMock,
      mockClient,
      mockDb,
      mockCollection,
      mockFind,
      mockToArray,
    },
  };
});

vi.mock("../src/config/env", () => ({
  getEnv: () => ({
    MONGO_URI: "mongodb://fake",
    MONGO_DB_NAME: "testdb",
    MONGO_USERS_COLLECTION: "users",
  }),
}));

import { MongoUserRepository } from "../src/repositories/MongoUserRepository";
import * as mongoModule from "mongodb";

function getMocks() {
  // @ts-ignore
  return mongoModule.__mocks;
}

beforeEach(() => {
  const mocks = getMocks();
  mocks.connectMock.mockClear();
  mocks.mockDb.collection.mockClear();
  mocks.mockFind.mockClear();
  mocks.mockToArray.mockClear();
});

describe("MongoUserRepository", () => {
  it("create() connects to Mongo and returns a repository", async () => {
    const mocks = getMocks();
    const repo = await MongoUserRepository.create();

    expect(mocks.connectMock).toHaveBeenCalledWith("mongodb://fake");
    expect(mocks.mockClient.db).toHaveBeenCalledWith("testdb");
    expect(mocks.mockDb.collection).toHaveBeenCalledWith("users");
    // Instance type check
    expect(repo).toBeInstanceOf(MongoUserRepository);
  });

  it("findAll() returns mapped User objects", async () => {
    const mocks = getMocks();
    mocks.mockToArray.mockResolvedValueOnce([
      { _id: "1", email: "a@example.com", name: "Alice" },
      { _id: "2", email: "b@example.com", name: "Bob" },
    ]);

    const repo = await MongoUserRepository.create();
    const users = await repo.findAll();

    expect(mocks.mockFind).toHaveBeenCalledWith({});
    expect(users).toEqual([
      { id: "1", email: "a@example.com", name: "Alice" },
      { id: "2", email: "b@example.com", name: "Bob" },
    ]);
  });
});
