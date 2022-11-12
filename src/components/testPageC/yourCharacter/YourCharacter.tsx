import React from 'react';
import { IYourCharacter } from '../../../models/IYourCharacter';

import s from './character.module.scss';

const YourCharacter: React.FC<IYourCharacter> = ({ character }) => {
  const LinkCharacterToOfficial = `https://www.leagueoflegends.com/ru-ru/champions/${character.id.toLowerCase()}/`;
  const AvatarLink = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character.id}_0.jpg`;

  return (
    <div className={s.character}>
      <div className="w-3/6">
        <img className={s.half} src={AvatarLink} alt={character.name} />
      </div>
      <div className="w-3/6">
        <div className={s.half2}>
          <div>
            <div className={s.character__name}>{character.name}</div>
            <div className={s.character__nickName}>{character.title}</div>
          </div>
          <div className={s.character__discription_box}>
            <div className={s.character__discription}>{character.blurb}</div>
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
