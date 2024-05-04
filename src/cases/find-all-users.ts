import {UserRepository} from '../database/repositories/user/user.repository';
import {makeUserRepository} from '../database/repositories/user/user.repository-orm';

export function makeFindAllUsersCase() {
  return new FindAllUsersCase(makeUserRepository());
}

export class FindAllUsersCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.findAll();
  }
}
