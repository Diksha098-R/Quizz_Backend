import express from 'express';
import { quizzController } from '../controllers/quizz';
export const quizzRouter = express.Router();

const QuizzController = new quizzController();

quizzRouter.get('/start', (req, res) => {
  console.log('in quizz get ');
  QuizzController.startQuizz(req, res);
})

