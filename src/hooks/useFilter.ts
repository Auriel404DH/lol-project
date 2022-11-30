import { ICharacter } from './../models/ICharacter';
import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ userParams, characterParams }: IUseFilter) => {
  const filteredCharacters = characterParams
    .filter((character: ICharacter) =>
      character.tags.some((el) => el.toLowerCase() === userParams.PersonClass.toLowerCase()),
    )
    .filter((character: ICharacter) => {
      if (userParams.classType) {
        return character.classType?.toLowerCase() === userParams.classType?.toLowerCase();
      }
      return character;
    })
    .filter((character: ICharacter) =>
      // userParams.difficulty.includes(character.info.difficulty.toString()),
      userParams.difficulty.includes(character.info.difficulty.toString()),
    )
    .filter((character: ICharacter) => character.aggressive.includes(userParams.aggressive));

  return filteredCharacters;
};

export default useFilter;
