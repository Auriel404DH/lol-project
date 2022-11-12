export interface IAnswerVariant {
  step: number;
  el: string;
  i: number;
  param: string | boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: number;
}
