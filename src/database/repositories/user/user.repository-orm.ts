import {Repository} from 'typeorm';
import {db} from '../..';
import {User, UserEntity, UserMapper} from '../../entities/user.entity';
import {UserRepository} from './user.repository';

export function makeUserRepository() {
  const orm = db.getRepository(UserEntity);
  const mapper = new UserMapper();
  return new UserRepositoryOrm(orm, mapper);
}

export class UserRepositoryOrm implements UserRepository {
  constructor(
    private readonly orm: Repository<UserEntity>,
    private readonly mapper: UserMapper
  ) {}

  async findAll(): Promise<User[]> {
    const entities = await this.orm.find();
    return this.mapper.toDomainList(entities);
  }

  async save(user: User): Promise<void> {
    await this.orm.save(this.mapper.toPersistence(user));
  }
}
