import { UserRequestDto } from './Database';
import { UserRepository } from './User.repository';

export class UserService {
  constructor(public readonly userRepo: UserRepository) {}

  async createUser(userData: UserRequestDto) {
    return this.userRepo.createUser(userData);
  }
}
