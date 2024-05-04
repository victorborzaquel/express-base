import {User} from '../../entities/user.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract save(user: User): Promise<void>;
}
