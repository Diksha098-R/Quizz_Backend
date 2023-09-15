import _ from "lodash";
import type { TQuestions, TScore } from "../types/Questions";

export function ScoreCalculator(ans: any, questions: Array<TQuestions>): TScore {
  let submittedAnswers:Array<Array<string>> = [];
  let data: Array<string>;
  let correctAnswer: Array<number> = [];
  let incorrectAnswer: Array<number> = [];
  let sendResponse: TScore;

  let responseKeys: Array<string> = Object.keys(ans);
  responseKeys.map((a) => {
    submittedAnswers.push([...ans[a].answer]);
  })

  questions.map((question: TQuestions, index: number) => {
    data = [...question.correctAnswer] as Array<string>;

    let diff1 = _.difference(data, submittedAnswers[index]);
    let diff2 = _.difference(submittedAnswers[index], data)
    if (diff1.length >= 1 || diff2.length >= 1) {
      incorrectAnswer.push(index);
    } else {
      correctAnswer.push(index);
    };
  })

  sendResponse = {
    correctAnswer,
    incorrectAnswer,
  }

  return sendResponse
}