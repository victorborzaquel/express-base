import {User} from '../../entities/user';
import {UserRepository} from './repository';

export class UserRepositoryFake implements UserRepository {
  private readonly db: User[] = [];

  async findAll() {
    return this.db;
  }

  async save(user: User) {
    this.db.push(user);
    return user;
  }
}
