import { QuestionAnswers } from './types';

export interface IframeForTest {
  step: number;
  questionsTitle: string[];
  questionsAnswers: QuestionAnswers[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  questionsCount: number;
}
