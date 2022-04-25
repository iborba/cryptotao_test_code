import { MongoHelper } from './infra/db/mongodb/MongoHelper';
import { App } from './main/config/app';
import env from './main/config/env';
const app = new App();

app.start();
MongoHelper.connect(env.mongoUrl).then(async () => {
  app._express.listen(env.port, () => {
    console.log(`🚀 Server listening at ${env.port}`);
  });
});
