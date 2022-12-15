import { QuestionAnswers } from './types';

export interface IframeForTest {
  step: number;
  prevStep: number[];
  questionsTitle: string[];
  questionStyles: string[];
  questionsAnswers: QuestionAnswers[];
  setPrevStep: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  questionsCount: number;
}
