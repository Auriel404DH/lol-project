export interface IConfirmModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  clearSteps: () => void;
}
