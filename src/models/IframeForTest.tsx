import { questionAnswersType } from './types';

export interface IframeForTest {
  step: number;
  questionId: number;
  questionsTitle: string;
  questionsAnswers: questionAnswersType[];
  setStep: (step: number) => void;
  questionsCount: number;
}
