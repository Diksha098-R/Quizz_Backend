import express from 'express';
export const quizzRouter = express.Router();

quizzRouter.get('/start', (req, res) => {
  console.log('in quizz get ');
  
  res.status(200).send({
    message: 'your quizz is a success'
  })
})

