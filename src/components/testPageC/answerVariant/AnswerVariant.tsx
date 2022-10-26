import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { IAnswerVariant } from '../../../models/IAnswerVariant';
import { addAnswer } from '../../../store/slices/charactersSlice';
import s from './Answer.module.scss';

const AnswerVariant = ({ el, i, nextStep }: IAnswerVariant) => {
  const dispatch = useAppDispatch();

  const nextStepData = () => {
    nextStep();
    dispatch(addAnswer(el));
  };

  return (
    <li key={`${el}_${i}`} onClick={nextStepData} className={s.answer}>
      <span>{el}</span>
    </li>
  );
};

export default AnswerVariant;
