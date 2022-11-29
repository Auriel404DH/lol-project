export interface IAnswerVariant {
  el: string;
  i?: number;
  param: string | boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: number;
  questionCounter: number;
  setQuestionCounter: React.Dispatch<React.SetStateAction<number>>;
}
