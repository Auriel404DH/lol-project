export interface IControlButtons {
  previousStep: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  questionCounter: number;
}
