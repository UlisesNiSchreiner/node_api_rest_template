import type { User } from "../types/User";
import type { UserRepository } from "../repositories/UserRepository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    // Aquí podrías agregar lógica de negocio, filtros, paginación, etc.
    return this.userRepository.findAll();
  }
}