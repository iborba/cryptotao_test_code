import { App } from './app';
const port = process.env.PORT || 8080;
const app = new App();

app.start();

app._express.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
