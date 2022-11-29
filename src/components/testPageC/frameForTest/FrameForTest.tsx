import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { IframeForTest } from '../../../models/IframeForTest';
import { removeAnswers } from '../../../store/slices/answersSlice';
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
  const [questionCounter, setQuestionCounter] = React.useState<number>(1);

  const previousStep = () => setStep(step - 1);

  const clearSteps = () => {
    dispatch(removeAnswers());
    setShowModal(!showModal);
    setQuestionCounter(1);
    setStep(0);
  };

  const confirmRestart: string = 'Вы точно хотите начать заново?';
  const attention: string = 'Выбранные вами ответы не сохранятcя!';

  return (
    <div className={s.frame}>
      <div className={s.frame__content}>
        <h2 className={s.question}>{questionsTitle[step]}</h2>
        <div className={s.frame__counter}>
          {questionCounter}/{questionsCount}
        </div>
        <div className={s['frame__content-text']}>
          <ul className={s.frame__list}>
            {questionsAnswers[step].map((el, i) => (
              <AnswerVariant
                el={el.text}
                nextStep={el.nextStep}
                param={el.param}
                i={i}
                setStep={setStep}
                questionCounter={questionCounter}
                setQuestionCounter={setQuestionCounter}
              />
            ))}
          </ul>
          <ControlButtons
            step={step}
            previousStep={previousStep}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          {showModal && (
            <ConfirmModal
              clearSteps={clearSteps}
              showModal={showModal}
              setShowModal={setShowModal}
              text={confirmRestart}
              attention={attention}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FrameForTest;
