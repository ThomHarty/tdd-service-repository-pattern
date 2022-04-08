import Database, { UserRequestDto } from './Database';

export class UserRepository {
  public readonly db = Database;

  async createUser(userData: UserRequestDto) {
    return this.db.create(userData);
  }
}
