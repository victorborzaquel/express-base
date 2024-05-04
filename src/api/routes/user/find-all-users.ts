import {Request, Response} from 'express';
import {makeFindAllUsers} from '../../../cases/find-all-users/make';
import {userToJson} from '../../presenters/user';

export async function findAllUsers(req: Request, res: Response) {
  const response = await makeFindAllUsers().execute();
  res.send(response.map(userToJson));
}
