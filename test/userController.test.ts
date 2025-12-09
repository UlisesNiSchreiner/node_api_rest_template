import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Request, Response } from "express";
import { UserController } from "../src/controllers/UserController";

const mockUserService = {
  getAllUsers: vi.fn(),
};

const mockRes = () => {
  return {
    json: vi.fn(),
  } as unknown as Response;
};

describe("UserController", () => {
  beforeEach(() => {
    mockUserService.getAllUsers.mockReset();
  });

  it("getAllUsers should call userService.getAllUsers and respond with users", async () => {
    const users = [
      { id: "1", email: "a@example.com", name: "Alice" },
      { id: "2", email: "b@example.com", name: "Bob" },
    ];
    mockUserService.getAllUsers.mockResolvedValueOnce(users);
    const controller = new UserController(mockUserService as any);
    const res = mockRes();

    await controller.getAllUsers({} as Request, res);

    expect(mockUserService.getAllUsers).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(users);
  });
});
