import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const headerValidator = (req: Request, res: Response, next: NextFunction) => {
  return req.headers.authorization ? next() : res.status(StatusCodes.BAD_REQUEST).json({ message: 'Token invalid' });
};
