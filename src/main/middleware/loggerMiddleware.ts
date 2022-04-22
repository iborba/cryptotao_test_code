import { NextFunction, Request, Response } from 'express';
import { hostname } from 'os';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.originalUrl} HOST: ${hostname()}`);

  next();
};
