import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { IAnswerVariant } from '../../../models/IAnswerVariant';
import { addAnswer2 } from '../../../store/slices/answersSlice';
import s from './Answer.module.scss';

const AnswerVariant = ({
  el,
  step,
  setStep,
  param,
  nextStep,
  styles,
  setQuestionCounter,
  questionCounter,
}: IAnswerVariant) => {
  const dispatch = useAppDispatch();

  const nextStepData = () => {
    const answerParams = {
      param: styles[step],
      answer: param,
    };
    dispatch(addAnswer2(answerParams));
    setStep(nextStep);
    setQuestionCounter(questionCounter + 1);
  };

  return (
    <li key={`${el}_${questionCounter}`} onClick={nextStepData} className={s.answer}>
      <span>{el}</span>
    </li>
  );
};

export default AnswerVariant;
