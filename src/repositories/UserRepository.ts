import type { User } from "../types/User";

export interface UserRepository {
  findAll(): Promise<User[]>;
}