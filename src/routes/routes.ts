import { Router } from 'express';
import { OK } from 'http-status-codes';

export class Routes {
  routes: Router;

  constructor() {
    this.routes = Router();

    this.routes.get('/', (_, res) => res.status(OK).send('Hello World!'));
  }
}
