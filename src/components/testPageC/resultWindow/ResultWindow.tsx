import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import characters from '../../../characters.json';
import s from './Result.module.scss';

const ResultWindow = () => {
  const dataQuestions = useAppSelector((state) => state.characters.answers);

  const answers = dataQuestions.map((el) => el.answer.id);

  console.log(answers);

  // const filterCharacters = characters.filter((param) => {
  //   if (param.params.agressive === answers) {
  //     return true;
  //   }
  //   return false;
  // });

  return (
    <div className={s.wrapper}>
      <div className="mx-2">|</div>
      <div>
        {answers.map((answer, i) => (
          <div key={i}>/</div>
        ))}
      </div>
      <div className="mx-2">|</div>
    </div>
  );
};

export default ResultWindow;
