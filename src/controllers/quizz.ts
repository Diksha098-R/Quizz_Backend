import { Request, Response } from 'express';
import { QUESTIONS } from '../data/index'
import { ScoreCalculator} from '../data/scoreCalculator'
import { TQuestions } from '../types/Questions';

export class quizzController {
  private data: Array<Object>;
  constructor() {
    this.data = [...QUESTIONS]
  }
  public async startQuizz(req: Request, res: Response) {

    res.status(200).send({
      data: this.data,
    message: 'Your quizz is a success! From controller'
  })
  }

  public saveQuestAns(req: Request, res: Response) {
    res.status(200).send({
      data: {
        'saved': true
      },
      message: 'success'
    })
  }

  public calculateScore(req: Request, res: Response) {
    let result = ScoreCalculator(req.body, this.data as Array<TQuestions>);
    res.status(200).send({
      data: {...result},
      message: 'success'
    })
  }
  
}