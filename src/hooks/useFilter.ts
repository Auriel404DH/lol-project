import { ICharacter } from './../models/ICharacter';
import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ userParams, characterParams }: IUseFilter) => {
  const classFilter = characterParams.filter((character: ICharacter) =>
    character.tags.some((el) => el.toLowerCase() === userParams.PersonClass.toLowerCase()),
  );
  const classTypeFilter = classFilter.filter((character: ICharacter) => {
    if (userParams.classType) {
      return character.classType?.toLowerCase() === userParams.classType?.toLowerCase();
    }
    return character;
  });
  const difficultyFilter = classTypeFilter.filter((character: ICharacter) =>
    userParams.difficulty.includes(character.info.difficulty.toString()),
  );
  const agressiveFilter = difficultyFilter.filter((character: ICharacter) => {
    if (userParams.classType === null) {
      return character.aggressive.includes(userParams.aggressive);
    } else {
      return character;
    }
  });

  const yourCharacters = agressiveFilter;

  const mainCharacterIndex = Math.floor(Math.random() * yourCharacters.length);
  const userCharacter =
    yourCharacters.length !== 1 ? yourCharacters.splice(mainCharacterIndex, 1)[0].id : yourCharacters[0].id;

  return { userCharacter, yourCharacters };
};

export default useFilter;
