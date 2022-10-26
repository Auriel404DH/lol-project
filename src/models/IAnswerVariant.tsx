import { questionAnswersType } from './types';

export interface IAnswerVariant {
  el: questionAnswersType;
  questionId: number;
  i: number;
  nextStep: () => void;
}
