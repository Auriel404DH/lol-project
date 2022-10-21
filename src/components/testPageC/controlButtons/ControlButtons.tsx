import { IControlButtons } from '../../../models/IControlBouttons';
import LeftArrow from '../../sharedC/icons/LeftArrowIcon';
import RestartIcon from '../../sharedC/icons/RestartIcon';

const ControlButtons = ({ previousStep, showModal, setShowModal, step }: IControlButtons) => {
  const toggleModal = () => setShowModal(!showModal);
  const backStep = step !== 0 ? previousStep : undefined;

  return (
    <div className="flex">
      <div onClick={backStep}>
        <LeftArrow width={22} height={22} />
      </div>
      <div onClick={toggleModal}>
        <RestartIcon width={22} height={22} />
      </div>
    </div>
  );
};

export default ControlButtons;
