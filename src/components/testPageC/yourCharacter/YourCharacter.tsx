import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { IYourCharacter } from '../../../models/IYourCharacter';
import { userCharacter } from '../../../store/actions/userCharacter';
import { removeAnswers } from '../../../store/slices/answersSlice';
import { InfoCharacter } from '../';

import s from './character.module.scss';

const YourCharacter: React.FC<IYourCharacter> = ({ character, setPrevStep, setStep }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(userCharacter({ character }));
  }, [dispatch, character]);

  const { champion } = useAppSelector((state) => state.characters);
  console.log(champion);

  const LinkCharacterToOfficial = `https://www.leagueoflegends.com/ru-ru/champions/${champion?.id.toLowerCase()}/`;
  const AvatarLink = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion?.id}_0.jpg`;

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
    <>
      <div className={s.character}>
        <div className={s.button__zone}>
          <InfoCharacter champion={champion} />
          <div className="text-center">
            <button onClick={navigateToRead} className={s.button}>
              Прочитать историю
            </button>
            <button onClick={navigateToTest} className={s.button}>
              Пройти тест заново
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <img className={s.half} src={AvatarLink} alt={champion?.name} />
        </div>
        <div className="w-1/3">
          <div className={s.half2}>
            <div>
              <div className={s.character__name}>{champion?.name}</div>
              <div className={s.character__nickName}>{champion?.title}</div>
            </div>
            <div className={s.character__discription_box}>
              <div className={s.character__discription}>{champion?.lore}</div>
            </div>
            <a href={LinkCharacterToOfficial} className={s.finalLink}>
              Узнать больше...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCharacter;
