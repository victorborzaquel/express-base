import {DataSource} from 'typeorm';
import {env} from '../config/env';

export const db = new DataSource({
  type: env.DATABASE_TYPE,
  database: env.DATABASE_URL,
  entities: [`${__dirname}/entities/*.{js,ts}`],
  synchronize: true,
  logging: false,
});
