import React from 'react';
import { IframeForTest } from '../../../models/IframeForTest';
import AnswerVariant from '../answerVariant/AnswerVariant';
import ConfirmModal from '../confirmModal/ConfirmModal';
import ControlButtons from '../controlButtons/ControlButtons';
import s from './FrameForTest.module.scss';

const FrameForTest = ({ step, setStep, questionsTitle, questionsAnswers }: IframeForTest) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);
  const clearSteps = () => {
    setShowModal(!showModal);
    setStep(0);
  };

  const confirmRestart = 'Вы точно хотите начать заново?';
  const attention = 'Выбранные вами ответы не сохранятcя!';

  return (
    <div className={s.frame}>
      <div className={s.frame__content}>
        <h2 className={s.question}>{questionsTitle[step]}</h2>
        <div className={s['frame__content-text']}>
          <ul className={s.frame__list}>
            {questionsAnswers[step].map((el, i) => (
              <AnswerVariant el={el} i={i} nextStep={nextStep} />
            ))}
          </ul>
          {showModal ? (
            <ConfirmModal
              clearSteps={clearSteps}
              showModal={showModal}
              setShowModal={setShowModal}
              text={confirmRestart}
              attention={attention}
            />
          ) : (
            ''
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
