import {User} from '../database/entities/user.entity';
import {UserRepository} from '../database/repositories/user/user.repository';
import {UserRepositoryFake} from '../database/repositories/user/user.repository-fake';
import {FindAllUsersCase} from './find-all-users';

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
        username: 'any_username',
        passwordHash: 'any_hash',
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'any_id',
      })
    );
    await repository.save(
      new User({
        name: 'any_name2',
        username: 'any_username',
        passwordHash: 'any_hash',
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'any_id',
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
