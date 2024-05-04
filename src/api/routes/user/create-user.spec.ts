import {Request, Response} from 'express';
import {CreateUserDto, makeCreateUserCase} from '../../../cases/create-user';
import {createUser} from './create-user';

jest.mock('../../../cases/create-user', () => {
  const originalModule = jest.requireActual('../../../cases/create-user');

  return {
    ...originalModule,
    makeCreateUser: jest.fn(() => ({
      execute: jest.fn().mockResolvedValue({
        id: 'id',
        name: 'John Doe',
        username: 'johndoe',
      }),
    })),
  };
});

// jest.mock('../../presenters/user', () => ({
//   userToJson: jest.fn().mockReturnValue({id: 1, name: 'John Doe'}),
// }));

describe('createUser', () => {
  it('should parse the request body and send the correct response', async () => {
    const body: CreateUserDto = {
      name: 'John Doe',
      password: '123',
      username: 'johndoe',
    };
    const req = {body} as Request;
    const res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await createUser(req, res);

    expect(makeCreateUserCase).toHaveBeenCalledTimes(1);
    // expect(userToJson).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      id: 'id',
      name: 'John Doe',
      username: 'johndoe',
    });
  });
  it('should parse the request body and send the correct response', async () => {
    const req = {body: {name: 123}} as Request;
    const res = {send: jest.fn()} as unknown as Response;

    await expect(() => createUser(req, res)).rejects.toThrow();
  });
});
