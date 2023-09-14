import express from 'express';
import { quizzController } from '../controllers/quizz';
export const quizzRouter = express.Router();

const QuizzController = new quizzController();

//start quizz
quizzRouter.get('/quizz/start', (req, res) => {
  console.log('in quizz get ');
  QuizzController.startQuizz(req, res);
})

//get next question by question number
quizzRouter.get('/quizz/question/:nextQuestNumber', (req, res) => {
  console.log('in quizz get by number');
  QuizzController.getQuestionByNo(req, res);
})

//post current question answer based on the user
quizzRouter.post('/quizz/question', (req, res) => {
  console.log('in quizz post ');
  QuizzController.startQuizz(req, res);
})

//get calculated score
quizzRouter.get('/quizz/score', (req, res) => {
  console.log('in quizz get score');
  QuizzController.startQuizz(req, res);
})
