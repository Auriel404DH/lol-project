import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { IframeForTest } from '../../../models/IframeForTest';
import { removeAnswers } from '../../../store/slices/answersSlice';
import AnswerVariant from '../answerVariant/AnswerVariant';
import ConfirmModal from '../confirmModal/ConfirmModal';
import ControlButtons from '../controlButtons/ControlButtons';
import s from './FrameForTest.module.scss';

const FrameForTest = ({
  step,
  setStep,
  prevStep,
  setPrevStep,
  questionsTitle,
  questionsAnswers,
  questionStyles,
}: IframeForTest) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [questionCounter, setQuestionCounter] = React.useState<number>(0);

  const previousStep = React.useCallback(() => {
    setQuestionCounter(questionCounter - 1);
    setStep(prevStep[questionCounter - 1]);
    prevStep.pop();
    setPrevStep(prevStep);
  }, [prevStep, setStep, setPrevStep, questionCounter]);

  const clearSteps = React.useCallback(() => {
    dispatch(removeAnswers());
    setShowModal(!showModal);
    setQuestionCounter(0);
    setPrevStep([]);
    setStep(0);
  }, [dispatch, setShowModal, setPrevStep, setStep, showModal]);

  return (
    <div className={s.frame}>
      <h2 className={s.question}>{questionsTitle[step]}</h2>
      <div className={s.frame__counter}>{questionCounter + 1}/9</div>
      <div className={s['frame__content-text']}>
        <ul className={s.frame__list}>
          {questionsAnswers[step].map((el, i) => (
            <AnswerVariant
              el={el.text}
              nextStep={el.nextStep}
              param={el.param}
              i={i}
              step={step}
              prevStep={prevStep}
              setStep={setStep}
              setPrevStep={setPrevStep}
              styles={questionStyles}
              questionCounter={questionCounter}
              setQuestionCounter={setQuestionCounter}
            />
          ))}
        </ul>
        <ControlButtons
          questionCounter={questionCounter}
          previousStep={previousStep}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        {showModal && (
          <ConfirmModal clearSteps={clearSteps} showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
};

export default FrameForTest;
