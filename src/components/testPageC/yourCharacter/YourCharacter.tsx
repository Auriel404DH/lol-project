import React from 'react';
import { IYourCharacter } from '../../../models/IYourCharacter';
import s from './character.module.scss';

const YourCharacter: React.FC<IYourCharacter> = ({ character }) => {
  return (
    <div className={s.character}>
      <div>
        <div className={s.character__name}>{character.name}</div>
        <div className={s.character__nickName}>{character.nickname}</div>
      </div>
      <div>
        <img className={s.image} src={character.avatar} alt={character.name} />
      </div>
      <div className={s.character__discription_box}>
        <div className={s.character__discription}>{character.discription}</div>
      </div>
    </div>
  );
};

export default YourCharacter;
