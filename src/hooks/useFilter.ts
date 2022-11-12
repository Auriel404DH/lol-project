import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ userParams, characterParams }: IUseFilter) => {
  const filteredCharacters = characterParams.filter((character) =>
    character.tags.some((el) => el.toLowerCase() === userParams.PersonClass.toLowerCase()),
  );

  return filteredCharacters;
};

export default useFilter;
