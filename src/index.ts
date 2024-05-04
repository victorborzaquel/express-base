import 'express-async-errors';
import 'reflect-metadata';
import {db} from './database';
import {http} from './http';

export async function server() {
  await db.initialize();

  http.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
server();
