import {Request, Response} from 'express';
import {
  makeCreateUserCase,
  makeCreateUserDto,
} from '../../../cases/create-user';
import {makeUserJson} from '../../presenters/user.presenter';

export async function createUser(req: Request, res: Response) {
  const dto = makeCreateUserDto(req.body);
  const response = await makeCreateUserCase().execute(dto);
  res.status(201).send(makeUserJson(response));
}
