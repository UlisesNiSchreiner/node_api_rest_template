import { describe, it, expect, vi } from "vitest";

import type { UserRepository } from "../src/repositories/UserRepository";
import { UserService } from "../src/services/UserService";
import type { User } from "../src/types/User";

describe("UserService", () => {
  it("debe retornar todos los usuarios usando el repositorio (mock)", async () => {
    const mockUsers: User[] = [
      { id: "1", email: "user1@example.com", name: "User 1" },
      { id: "2", email: "user2@example.com", name: "User 2" },
    ];

    const userRepositoryMock: UserRepository = {
      findAll: vi.fn().mockResolvedValue(mockUsers),
    };

    const service = new UserService(userRepositoryMock);

    const result = await service.getAllUsers();

    expect(result).toEqual(mockUsers);
    expect(userRepositoryMock.findAll).toHaveBeenCalledTimes(1);
  });
});