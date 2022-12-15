export interface IAnswerVariant {
  el: string;
  i?: number;
  step: number;
  prevStep: number[];
  nextStep: number;
  questionCounter: number;
  styles: string[];
  param: string | string[];
  setQuestionCounter: React.Dispatch<React.SetStateAction<number>>;
  setPrevStep: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
