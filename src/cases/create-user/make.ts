import {UserRepositoryOrm} from '../../database/repositories/user/orm';
import {CreateUserCase} from './case';

export function makeCreateUser() {
  const repository = new UserRepositoryOrm();
  return new CreateUserCase(repository);
}
