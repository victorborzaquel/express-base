import {Request, Response} from 'express';
import {ZodError} from 'zod';

export function errorHandler(err: Error, req: Request, res: Response) {
  if (err instanceof ZodError) {
    return res.status(400).json({errors: err.errors});
  }
  console.error(err.stack);
  return res.status(500).send('Algo deu errado!');
}
