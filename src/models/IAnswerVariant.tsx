import { questionAnswersType } from './types';

export interface IAnswerVariant {
  el: questionAnswersType;
  i: number;
  nextStep: () => void;
}
