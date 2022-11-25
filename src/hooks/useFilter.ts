import { ICharacter } from './../models/ICharacter';
import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ userParams, characterParams }: IUseFilter) => {
  const juggers = [
    'Aatrox',
    'Sett',
    'Shyvana',
    'Darius',
    'Trundle',
    'Udyr',
    'Urgot',
    'Garen',
    'Illaoi',
    'Volibear',
    'Mordekaiser',
    'Yorick',
    'DrMundo',
    'Nasus',
  ];
  const warriors = [
    'kamilla', 'irelia',
  ]

  characterParams.forEach((character: ICharacter) => {
    if (character.tags.some((tag: string) => tag === 'fighter')) {
      if (juggers.some((el) => el === character.id)) {
        character.classType = 'juggernaut';
      }
      character.classType = 'diver';
    }
  });

  const filteredCharacters = characterParams
    .filter((character: ICharacter) =>
      character.tags.some((el) => el.toLowerCase() === userParams.PersonClass.toLowerCase()),
    )
    .filter(
      (character: ICharacter) =>
        character.classType?.toLowerCase() === userParams.classType.toLowerCase(),
    );

  return filteredCharacters;
};

export default useFilter;
