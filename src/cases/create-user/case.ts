import {User} from '../../database/entities/user';
import {UserRepository} from '../../database/repositories/user/repository';

export class CreateUserCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({name}: {name: string}) {
    const user = new User({name});
    return this.userRepository.save(user);
  }
}
