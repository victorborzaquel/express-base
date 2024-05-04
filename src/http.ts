import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as methodOverride from 'method-override';
import {userRouter} from './api/routes/user';
import {errorHandler} from './config/error-handler';

const http = express();

http.use(cors());
http.use(bodyParser.json());
http.use(bodyParser.urlencoded({extended: false}));
http.use(methodOverride());

http.use('/users', userRouter);

http.use(errorHandler);

export {http};
