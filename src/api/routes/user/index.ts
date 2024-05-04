import * as express from 'express';
import {createUser} from './create-user';
import {findAllUsers} from './find-all-users';

const userRouter = express.Router();

userRouter.get('/', findAllUsers);
userRouter.post('/', createUser);

export {userRouter};
