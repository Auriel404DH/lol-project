import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { IAnswerVariant } from '../../../models/IAnswerVariant';
import { addAnswer2 } from '../../../store/slices/answersSlice';
import { PARAMS } from '../../../models/Enums';
import s from './Answer.module.scss';

const AnswerVariant = ({ el, i, setStep, step, param, nextStep }: IAnswerVariant) => {
  const dispatch = useAppDispatch();

  const nextStepData = () => {
    const answerParams = {
      param: PARAMS[step],
      answer: param,
    };
    dispatch(addAnswer2(answerParams));
    setStep(nextStep);
    // setStep();
  };

  return (
    <li key={`${el}_${i}`} onClick={nextStepData} className={s.answer}>
      <span>{el}</span>
    </li>
  );
};

export default AnswerVariant;
