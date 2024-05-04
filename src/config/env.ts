import {z} from 'zod';

const schema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z
    .string()
    .default('3000')
    .transform(v => parseInt(v)),
  DATABASE_URL: z.string().default('./tmp/db.sqlite'),
  DATABASE_TYPE: z.enum(['sqlite']).default('sqlite'),
});

const parse = schema.parse(process.env);

export const env = {
  ...parse,
  isDevelopment: parse.NODE_ENV === 'development',
  isProduction: parse.NODE_ENV === 'production',
  isTest: parse.NODE_ENV === 'test',
};
