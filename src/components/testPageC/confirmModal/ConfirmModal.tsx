import { IConfirmModal } from '../../../models/IConfirmModal';
import ButtonMainPage from '../../sharedC/buttons/ButtonMainPage';
import s from './Modal.module.scss';

const ConfirmModal = ({ showModal, setShowModal, clearSteps }: IConfirmModal) => {
  const trueModal = () => clearSteps();
  const falseModal = () => setShowModal(!showModal);

  return (
    <div className={s.wrapper}>
      <div className={s.text}>Вы точно хотите начать заново?'</div>
      <div className={s.attention}>Выбранные вами ответы не сохранятcя!</div>
      <div className={s.buttons}>
        <div onClick={falseModal}>
          <ButtonMainPage value={'No'} />
        </div>
        <div onClick={trueModal}>
          <ButtonMainPage value={'Yes'} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
