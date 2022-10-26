import { questionAnswersType } from './types';

export interface IframeForTest {
  step: number;
  questionsTitle: string[];
  questionsAnswers: questionAnswersType[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  questionsCount: number;
}
