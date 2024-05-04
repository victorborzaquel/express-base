import {Request, Response} from 'express';
import {makeCreateUser} from '../../../cases/create-user/make';
import {userToJson} from '../../presenters/user';
import {createUser} from './create-user';

jest.mock('../../../cases/create-user/make', () => ({
  makeCreateUser: jest.fn(() => ({
    execute: jest.fn().mockResolvedValue({id: 1, name: 'John Doe'}),
  })),
}));

jest.mock('../../presenters/user', () => ({
  userToJson: jest.fn().mockReturnValue({id: 1, name: 'John Doe'}),
}));

describe('createUser', () => {
  it('should parse the request body and send the correct response', async () => {
    const req = {body: {name: 'John Doe'}} as Request;
    const res = {send: jest.fn()} as unknown as Response;

    await createUser(req, res);

    expect(makeCreateUser).toHaveBeenCalledTimes(1);
    expect(userToJson).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({id: 1, name: 'John Doe'});
  });
  it('should parse the request body and send the correct response', async () => {
    const req = {body: {name: 123}} as Request;
    const res = {send: jest.fn()} as unknown as Response;

    await expect(() => createUser(req, res)).rejects.toThrow();
  });
});
