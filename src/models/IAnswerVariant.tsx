export interface IAnswerVariant {
  el: string;
  i?: number;
  styles: string[];
  param: string | boolean;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: number;
  questionCounter: number;
  setQuestionCounter: React.Dispatch<React.SetStateAction<number>>;
}
