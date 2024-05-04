import {CreateUserCase} from './case';
import {User} from '../../database/entities/user';
import {UserRepositoryFake} from '../../database/repositories/user/fake';
import {UserRepository} from '../../database/repositories/user/repository';

describe('CreateUserCase', () => {
  let repository: UserRepository;
  let useCase: CreateUserCase;

  beforeEach(() => {
    repository = new UserRepositoryFake();
    useCase = new CreateUserCase(repository);
  });

  it('should create a user', async () => {
    const user = await useCase.execute({name: 'any_name'});

    expect(user).toBeInstanceOf(User);
    expect(user.id).toBeTruthy();
    expect(user.name).toEqual('any_name');
  });
});
