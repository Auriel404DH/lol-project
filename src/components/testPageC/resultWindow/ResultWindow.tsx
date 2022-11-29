import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import useFilter from '../../../hooks/useFilter';
import PossibleCharacter from '../possibleCharacters/PossibleCharacter';
import YourCharacter from '../yourCharacter/YourCharacter';
import { removeAnswers } from '../../../store/slices/answersSlice';
import s from './result.module.scss';
import useUpdate from '../../../hooks/useUpdate';

interface IResultWindow {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ResultWindow: React.FC<IResultWindow> = ({ setStep }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userParams = useAppSelector((state) => state.answers?.answers2);
  const champions = useAppSelector((state) => state.characters.champions);

  const characterParams = useUpdate({ champions });
  const yourCharacters = useFilter({ userParams, characterParams });

  const navigateToRead = () => {
    dispatch(removeAnswers());
    navigate('/story');
  };
  const navigateToTest = () => {
    dispatch(removeAnswers());
    setStep(0);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.entryText}>
        <div className={s.congratulations}>Поздравляем!</div>
        <div className={s.yourCharacters}>Ваш персонаж:</div>
      </div>
      <div className="flex">
        <div className={s.button__zone}>
          <button onClick={navigateToRead} className={s.button}>
            Прочитать историю
          </button>
        </div>
        <YourCharacter character={yourCharacters[0]} />
        <div className={s.button__zone}>
          <button onClick={navigateToTest} className={s.button}>
            Пройти тест заново
          </button>
        </div>
      </div>
      <div className={s.recs}>Возможно, вам так же подойдут:</div>
      <div className="flex justify-center flex-wrap">
        {yourCharacters.map((character, i) => (
          <PossibleCharacter character={character} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ResultWindow;
