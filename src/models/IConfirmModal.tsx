export interface IConfirmModal {
  text: string;
  attention: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  clearSteps: () => void;
}
