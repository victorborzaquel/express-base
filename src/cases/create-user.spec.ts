import {User} from '../database/entities/user.entity';
import {UserRepository} from '../database/repositories/user/user.repository';
import {UserRepositoryFake} from '../database/repositories/user/user.repository-fake';
import {HashProviderFake} from '../lib/hash-fake.provider';
import {CreateUserCase} from './create-user';

describe('CreateUserCase', () => {
  let repository: UserRepository;
  let useCase: CreateUserCase;

  beforeEach(() => {
    repository = new UserRepositoryFake();
    useCase = new CreateUserCase(repository, new HashProviderFake());
  });

  it('should create a user', async () => {
    const user = await useCase.execute({
      name: 'any_name',
      username: 'any_username',
      password: 'any_password',
    });

    expect(user).toBeInstanceOf(User);
    expect(user.id).toBeTruthy();
    expect(user.name).toEqual('any_name');
    expect(user.passwordHash).toEqual('any_password');
  });
});
