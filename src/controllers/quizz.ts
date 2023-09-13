import express, { Request, Response } from 'express';

export class quizzController {
  public startQuizz(req: Request, res: Response) {
    res.status(200).send({
    message: 'Your quizz is a success! From controller'
  })
  }
}