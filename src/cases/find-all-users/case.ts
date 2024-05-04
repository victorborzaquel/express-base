import {UserRepository} from '../../database/repositories/user/repository';

export class FindAllUsersCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.findAll();
  }
}
