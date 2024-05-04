import {FindAllUsersCase} from './case';
import {User} from '../../database/entities/user';
import {UserRepositoryFake} from '../../database/repositories/user/fake';
import {UserRepository} from '../../database/repositories/user/repository';

describe('FindAllUsersCase', () => {
  let repository: UserRepository;
  let useCase: FindAllUsersCase;

  beforeEach(() => {
    repository = new UserRepositoryFake();
    useCase = new FindAllUsersCase(repository);
  });

  it('should return a list of users', async () => {
    await repository.save(
      new User({
        name: 'any_name',
      })
    );
    await repository.save(
      new User({
        name: 'any_name2',
      })
    );

    const [n1, n2] = await useCase.execute();

    expect(n1).toBeInstanceOf(User);
    expect(n2).toBeInstanceOf(User);
    expect(n1.id).toBeTruthy();
    expect(n2.id).toBeTruthy();
    expect(n1.name).toEqual('any_name');
    expect(n2.name).toEqual('any_name2');
  });
});
