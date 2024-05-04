import {User} from '../../database/entities/user.entity';

export type UserJson = Omit<User, 'passwordHash'>;

export function makeUserJson({
  createdAt,
  id,
  name,
  username,
  updatedAt,
}: User): UserJson {
  return {id, createdAt, updatedAt, name, username};
}

export function makeUsersJson(users: User[]): UserJson[] {
  return users.map(makeUserJson);
}
