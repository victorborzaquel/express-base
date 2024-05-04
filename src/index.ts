import 'express-async-errors';
import 'reflect-metadata';
import {env} from './config/env';
import {db} from './database';
import {http} from './http';

export async function server() {
  await db.initialize();

  http.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}
server();
