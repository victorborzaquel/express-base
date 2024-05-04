import {z} from 'zod';
import {User} from '../database/entities/user.entity';
import {UserRepository} from '../database/repositories/user/user.repository';
import {makeUserRepository} from '../database/repositories/user/user.repository-orm';
import {HashProvider} from '../lib/hash-provider/hash.provider';
import {HashProviderImpl} from '../lib/hash-provider/hash.provider-impl';

export function makeCreateUserCase() {
  return new CreateUserCase(makeUserRepository(), new HashProviderImpl());
}

const schema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
});
export type CreateUserDto = z.infer<typeof schema>;
export function makeCreateUserDto(dto: CreateUserDto) {
  return schema.parse(dto);
}

export class CreateUserCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const {password, ...rest} = dto;
    const passwordHash = await this.hashProvider.hash(password);
    const user = new User({...rest, passwordHash});
    await this.userRepository.save(user);
    return user;
  }
}
