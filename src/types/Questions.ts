type TQuestionText = {
  text: string;
}

export type TQuestions = {
  id: string,
  question: TQuestionText,
  options: Array<string>,
  correctAnswer: Array<string>,
  incorrectAnswers: Array<string>,
  tags?: Array<string>,
  regions?: Array<string>,
  isNiche?: boolean,
}

export type TScore = {
  correctAnswer: Array<number>,
  incorrectAnswer: Array<number>,
}


