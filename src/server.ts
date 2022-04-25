// import 'module-alias/register';
import env from './main/config/env';
import { MongoHelper } from './infra/db/mongodb/MongoHelper';

MongoHelper.connect(env.mongoUrl).then(async () => {
  const { setupApp } = await import('./main/config/app');
  const app = await setupApp();
  app.listen(env.port, () => console.log(`🚀 Server listening at ${env.port}`));
});
