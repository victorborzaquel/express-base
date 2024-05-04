import {Request, Response} from 'express';
import {makeFindAllUsersCase} from '../../../cases/find-all-users';
import {makeUsersJson} from '../../presenters/user.presenter';

export async function findAllUsers(req: Request, res: Response) {
  const response = await makeFindAllUsersCase().execute();
  res.send(makeUsersJson(response));
}
