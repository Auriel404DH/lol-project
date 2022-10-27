import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { IframeForTest } from '../../../models/IframeForTest';
import { removeAnswers } from '../../../store/slices/charactersSlice';
import AnswerVariant from '../answerVariant/AnswerVariant';
import ConfirmModal from '../confirmModal/ConfirmModal';
import ControlButtons from '../controlButtons/ControlButtons';
import s from './FrameForTest.module.scss';

const FrameForTest = ({
  step,
  setStep,
  questionsTitle,
  questionsAnswers,
  questionsCount,
}: IframeForTest) => {
  
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);
  const clearSteps = () => {
    dispatch(removeAnswers());
    setShowModal(!showModal);
    setStep(0);
  };

  const confirmRestart: string = 'Вы точно хотите начать заново?';
  const attention: string = 'Выбранные вами ответы не сохранятcя!';

  return (
    <div className={s.frame}>
      <div className={s.frame__content}>
        <h2 className={s.question}>{questionsTitle[step]}</h2>
        <div className={s.frame__counter}>
          {step}/{questionsCount}
        </div>
        <div className={s['frame__content-text']}>
          <ul className={s.frame__list}>
            {questionsAnswers[step].map((el, i) => (
              <AnswerVariant title={questionsTitle[step]} el={el} i={i} nextStep={nextStep} />
            ))}
          </ul>
          {showModal && (
            <ConfirmModal
              clearSteps={clearSteps}
              showModal={showModal}
              setShowModal={setShowModal}
              text={confirmRestart}
              attention={attention}
            />
          )}
          <ControlButtons
            step={step}
            previousStep={previousStep}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameForTest;
