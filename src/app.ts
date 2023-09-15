import express, { Application } from 'express';
var cors = require('cors')

export default class App {
  private app: Application;
  private port: number;
  private baseUrl: string;

  constructor(port: number, baseUrl: string, allRoutes: Array<express.Router>) {
    this.app = express();
    this.port = port;
    this.baseUrl = baseUrl;
    this.routes(allRoutes);
  }

  private routes(allRoutes: Array<express.Router>) {
    allRoutes.forEach(route => {
      this.app.use(cors(this.baseUrl), route)
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Quizz app server listening on port ', this.port, '...');
      
    })
  }
}