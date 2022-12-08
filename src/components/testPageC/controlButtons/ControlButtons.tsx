import { useNavigate } from 'react-router-dom';
import { IControlButtons } from '../../../models/IControlBouttons';
import LeftArrow from '../../sharedC/icons/LeftArrowIcon';
import RestartIcon from '../../sharedC/icons/RestartIcon';

const ControlButtons = ({ previousStep, showModal, setShowModal, step }: IControlButtons) => {
  const navigate = useNavigate();

  const toggleModal = () => setShowModal(!showModal);
  const backStep = step !== 0 ? previousStep : undefined;
  const menuClick = () => navigate('/');

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div onClick={backStep}>
          <LeftArrow width={22} height={22} />
        </div>
        <div onClick={toggleModal}>
          <RestartIcon width={22} height={22} />
        </div>
      </div>
      <div
        onClick={menuClick}
        className="hover:bg-slate-50 duration-200 items-center cursor-pointer flex h-fit p-2.5 my-auto rounded-md bg-main text-mainBG"
      >
        Меню
      </div>
    </div>
  );
};

export default ControlButtons;
