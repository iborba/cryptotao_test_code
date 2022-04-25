import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import cors from 'cors';
import { loggerMiddleware } from '../middleware/loggerMiddleware';
import { Routes } from './routes';

dotenvConfig({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export class App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _express: any;
  constructor() {
    this._express = express();
  }

  middlewares() {
    this._express.use(cors());
    this._express.use(loggerMiddleware);
    this._express.use(express.json());
  }

  routes() {
    this._express.use('/api', new Routes().routes);
  }

  start() {
    this.middlewares();
    this.routes();
    const server = 
  }
}
