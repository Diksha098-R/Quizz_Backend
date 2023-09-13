import App from './app';
import { env } from './env/default';
import allRouters from './routers/index';

const app = new App(env.port, env.basePath, allRouters);

console.log('Please wait until the server starts!');
app.listen();
