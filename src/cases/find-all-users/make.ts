import {UserRepositoryOrm} from '../../database/repositories/user/orm';
import {FindAllUsersCase} from './case';

export function makeFindAllUsers() {
  const repository = new UserRepositoryOrm();
  return new FindAllUsersCase(repository);
}
