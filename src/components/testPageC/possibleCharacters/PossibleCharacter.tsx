import React from 'react';
import { ICharacter } from '../../../models/ICharacter';

interface IPossibleCharacter {
  character: ICharacter;
}

const PossibleCharacter: React.FC<IPossibleCharacter> = ({ character }) => {
  return (
    <div className="w-2/12 mx-2 my-2 cursor-pointer p-1 rounded-md bg-mainBG2 font-ubuntuMedium">
      <div className="text-center text-xl mb-1">{character.name}</div>
      <img
        className="w-32 mx-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character.id}_0.jpg`}
        alt={character.name}
      />
      <div className="text-center text-xs mt-1">{character.title}</div>
    </div>
  );
};

export default PossibleCharacter;
