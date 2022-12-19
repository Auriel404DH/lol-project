import { ICharacter } from './../models/ICharacter';
import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ userParams, characterParams }: IUseFilter) => {
  const firstFilterCharacters = characterParams
    .filter((character: ICharacter) =>
      character.tags.some((el) => el.toLowerCase() === userParams.PersonClass.toLowerCase()),
    )
    .filter((character: ICharacter) => {
      if (userParams.classType) {
        return character.classType?.toLowerCase() === userParams.classType?.toLowerCase();
      }
      return character;
    })
    .filter((character: ICharacter) => {
      return character.aggressive.includes(userParams.aggressive.toLowerCase());
    });

  const secondFilterCharacters = firstFilterCharacters.filter((character: ICharacter) => {
    return userParams.difficulty.includes(character.info.difficulty.toString());
  });

  const mainCharacterIndex = Math.floor(Math.random() * secondFilterCharacters.length);
  const saveCharacterIndex = Math.floor(Math.random() * firstFilterCharacters.length);

  const createExit = (index: number, otherChampions: ICharacter[]) => {
    const userCharacter =
      otherChampions.length !== 1
        ? otherChampions.splice(index, 1)[0].id
        : otherChampions.splice(0)[0].id;

    return { userCharacter, otherChampions };
  };

  const { userCharacter, otherChampions } =
    secondFilterCharacters.length === 0
      ? createExit(saveCharacterIndex, firstFilterCharacters)
      : createExit(mainCharacterIndex, secondFilterCharacters);

  return { userCharacter, otherChampions };
};

export default useFilter;
