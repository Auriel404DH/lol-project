import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import useFilter from '../../../hooks/useFilter';
import PossibleCharacter from '../possibleCharacters/PossibleCharacter';
import YourCharacter from '../yourCharacter/YourCharacter';
import { removeAnswers } from '../../../store/slices/answersSlice';
import useUpdate from '../../../hooks/useUpdate';
import s from './result.module.scss';

interface IResultWindow {
  setPrevStep: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ResultWindow: React.FC<IResultWindow> = ({ setStep, setPrevStep }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userParams = useAppSelector((state) => state.answers?.answers2);
  const champions = useAppSelector((state) => state.characters.champions);

  const characterParams = useUpdate({ champions });

  const { userCharacter, otherChampions } = useFilter({ userParams, characterParams });

  const navigateToRead = () => {
    dispatch(removeAnswers());
    navigate('/story');
  };
  const navigateToTest = () => {
    dispatch(removeAnswers());
    setPrevStep([]);
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
        <YourCharacter character={userCharacter} />
        <div className={s.button__zone}>
          <button onClick={navigateToTest} className={s.button}>
            Пройти тест заново
          </button>
        </div>
      </div>
      {otherChampions.length !== 1 && (
        <div>
          <div className={s.recs}>Возможно, вам так же подойдут:</div>
          <div className="flex justify-center flex-wrap">
            {otherChampions.map((character, i) => (
              <PossibleCharacter character={character} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultWindow;
