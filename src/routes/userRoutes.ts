import { Router } from "express";

import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { MongoUserRepository } from "../repositories/MongoUserRepository";

export async function createUserRouter(): Promise<Router> {
  const router = Router();

  const userRepository = await MongoUserRepository.create();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  router.get("/", userController.getAllUsers);

  return router;
}