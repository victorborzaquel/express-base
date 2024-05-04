import {Request, Response} from 'express';
import {z} from 'zod';
import {makeCreateUser} from '../../../cases/create-user/make';
import {userToJson} from '../../presenters/user';

export async function createUser(req: Request, res: Response) {
  const body = z.object({name: z.string()}).parse(req.body);
  const response = await makeCreateUser().execute(body);
  res.send(userToJson(response));
}
