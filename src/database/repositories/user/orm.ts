import {Repository} from 'typeorm';
import {db} from '../..';
import {User} from '../../entities/user';
import {UserRepository} from './repository';

export class UserRepositoryOrm implements UserRepository {
  private readonly db: Repository<User> = db.getRepository(User);

  async findAll() {
    return this.db.find();
  }

  async save(user: User) {
    return this.db.save(user);
  }
}
