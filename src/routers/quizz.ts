import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { quizzController } from '../controllers/quizz';
export const quizzRouter = express.Router();

const QuizzController = new quizzController();
var jsonParser = bodyParser.json()

//start quizz
quizzRouter.get('/list', (req: Request, res: Response) => {
  console.log('in quizz get ');
  QuizzController.startQuizz(req, res);
})

//post answer of a question
quizzRouter.post('/question/:id', jsonParser, (req: Request, res: Response) => {
  console.log('in quizz get by number');
  QuizzController.saveQuestAns(req, res);
})

//get calculated score
quizzRouter.post('/score', jsonParser, (req: Request, res: Response) => {
  console.log('in quizz get score in routes ');
  QuizzController.calculateScore(req, res);
})
