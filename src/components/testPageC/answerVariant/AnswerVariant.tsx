import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { IAnswerVariant } from '../../../models/IAnswerVariant';
import { addAnswer } from '../../../store/slices/charactersSlice';
import s from './Answer.module.scss';

const AnswerVariant: React.FC<IAnswerVariant> = ({ el, i, questionId, nextStep }) => {
  const dispatch = useAppDispatch();

  const nextStepData = () => {
    nextStep();
    dispatch(addAnswer({answer: el, questionId}));
  };

  return (
    <li key={`${el}_${i}`} onClick={nextStepData} className={s.answer}>
      <span>{el.text}</span>
    </li>
  );
};

export default AnswerVariant;
