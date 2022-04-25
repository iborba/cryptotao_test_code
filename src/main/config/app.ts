import express, { Express, json } from 'express';
import cors from 'cors';
import { loggerMiddleware } from '../middleware/loggerMiddleware';
import { Routes } from './routes';
import { setupApolloServer } from '../../graphql/apollo/ApolloServer';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(json());
  app.use(cors());
  app.use(loggerMiddleware);
  const t = new Routes().routes;
  app.use('/api', t);
  const server = setupApolloServer();
  await server.start();
  server.applyMiddleware({ app });
  return app;
};
