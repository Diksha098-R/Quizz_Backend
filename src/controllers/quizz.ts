import { Request, Response, json } from 'express';
import { QUESTIONS } from '../data/index'

export class quizzController {
  private data: Array<Object>;
  constructor() {
    this.data = [...QUESTIONS]
  }
  public async startQuizz(req: Request, res: Response) {

    // await fetch("https://the-trivia-api.com/v2/questions").then((res) => res.json()).then((response) => {
    //   console.log({response});
    //     data = response;
    // }).catch((error) => {
    //   console.log({ error }); 
    // })
    // console.log({data});
    

    res.status(200).send({
      data: this.data,
    message: 'Your quizz is a success! From controller'
  })
  }

  public getQuestionByNo(req: Request, res: Response) {
    res.status(200).send({
      data: {
        questions: this.data[0],
      },
      message: 'success'
    })
  }
}