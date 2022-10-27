export interface IAnswerVariant {
  step: number;
  el: string;
  i: number;
  param: string | boolean;
  nextStep: () => void;
}
