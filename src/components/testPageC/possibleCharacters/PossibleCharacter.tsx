import React from 'react';
import { IYourCharacter } from '../../../models/IYourCharacter';

const PossibleCharacter: React.FC<IYourCharacter> = ({ character }) => {
  return (
    <>
      <div className="w-2/12 mx-2 mt-2 cursor-pointer p-1 rounded-md bg-mainBG2 font-ubuntuMedium">
        <div className="text-center text-xl mb-1">{character.name}</div>
        <img src={character.avatar} alt={character.name} />
        <div className="text-center text-xs mt-1">{character.nickname}</div>
      </div>
    </>
  );
};

export default PossibleCharacter;
