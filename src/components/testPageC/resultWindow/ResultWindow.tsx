import React from 'react';
import { useAppSelector, useFilter, useUpdate } from '../../../hooks';
import { PossibleCharacter, YourCharacter } from '../';
import s from './result.module.scss';

interface IResultWindow {
  setPrevStep: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ResultWindow: React.FC<IResultWindow> = ({ setStep, setPrevStep }) => {
  const userParams = useAppSelector((state) => state.answers?.answers2);
  const champions = useAppSelector((state) => state.characters.champions);

  const characterParams = useUpdate({ champions });

  const { userCharacter, otherChampions } = useFilter({ userParams, characterParams });

  return (
    <div className={s.wrapper}>
      <div className={s.entryText}>
        <div className={s.congratulations}>Поздравляем!</div>
        <div className={s.yourCharacters}>Ваш персонаж:</div>
      </div>
      <YourCharacter setStep={setStep} setPrevStep={setPrevStep} character={userCharacter} />

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
