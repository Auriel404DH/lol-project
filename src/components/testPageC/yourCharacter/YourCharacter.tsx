import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { IYourCharacter } from '../../../models/IYourCharacter';
import { userCharacter } from '../../../store/actions/userCharacter';

import s from './character.module.scss';

const YourCharacter: React.FC<IYourCharacter> = ({ character }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(userCharacter({ character }));
  }, [dispatch, character]);

  const { champion } = useAppSelector((state) => state.characters);

  console.log(champion);

  const LinkCharacterToOfficial = `https://www.leagueoflegends.com/ru-ru/champions/${champion?.id.toLowerCase()}/`;
  const AvatarLink = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion?.id}_0.jpg`;

  return (
    <div className={s.character}>
      <div className="w-3/6">
        <img className={s.half} src={AvatarLink} alt={champion?.name} />
      </div>
      <div className="w-3/6">
        <div className={s.half2}>
          <div>
            <div className={s.character__name}>{champion?.name}</div>
            <div className={s.character__nickName}>{champion?.title}</div>
          </div>
          <div className={s.character__discription_box}>
            <div className={s.character__discription}>{champion?.blurb}</div>
          </div>
          <a href={LinkCharacterToOfficial} className={s.finalLink}>
            Узнать больше...
          </a>
        </div>
      </div>
    </div>
  );
};

export default YourCharacter;
