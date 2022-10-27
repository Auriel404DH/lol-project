export interface IframeForTest {
  step: number;
  questionsTitle: string[];
  questionsAnswers: string[][];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  questionsCount: number;
}
