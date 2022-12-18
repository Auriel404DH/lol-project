

export interface IYourCharacter {
  setPrevStep: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  character: string;
}
