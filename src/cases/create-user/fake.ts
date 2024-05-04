import {UserRepositoryFake} from '../../database/repositories/user/fake';
import {CreateUserCase} from './case';

export function makeCreateUserFake() {
  const repository = new UserRepositoryFake();
  return new CreateUserCase(repository);
}
