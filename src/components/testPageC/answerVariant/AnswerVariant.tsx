import React from 'react';
import s from './Answer.module.scss';

const AnswerVariant = ({ el, i, nextStep }: { el: string; i: number; nextStep: () => void }) => {
  return (
    <li key={`${el}_${i}`} onClick={nextStep} className={s.answer}>
      <span>{el}</span>
    </li>
  );
};

export default AnswerVariant;
