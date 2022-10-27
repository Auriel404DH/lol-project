import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { IAnswerVariant } from '../../../models/IAnswerVariant';
import { addAnswer } from '../../../store/slices/charactersSlice';
import s from './Answer.module.scss';

const AnswerVariant = ({ el, i, nextStep, title }: IAnswerVariant) => {
  const dispatch = useAppDispatch();

  const questionId: string = title;
  const answerId: number = i;
  const answerText: string = el;

  const nextStepData = () => {
    nextStep();
    dispatch(addAnswer({ questionId, answerId, answerText }));
  };

  return (
    <li key={`${el}_${i}`} onClick={nextStepData} className={s.answer}>
      <span>{el}</span>
    </li>
  );
};

export default AnswerVariant;
