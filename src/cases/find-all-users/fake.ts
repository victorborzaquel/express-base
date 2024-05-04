import {UserRepositoryFake} from '../../database/repositories/user/fake';
import {FindAllUsersCase} from './case';

export function makeFindAllUsersFake() {
  const repository = new UserRepositoryFake();
  return new FindAllUsersCase(repository);
}
