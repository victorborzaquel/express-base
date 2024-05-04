import {User} from '../../database/entities/user';

export abstract class UserJson {
  id: string;
  name: string;
}

export function userToJson(user: User): UserJson {
  return {
    id: user.id,
    name: user.name,
  };
}
