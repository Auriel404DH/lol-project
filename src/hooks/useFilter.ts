import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ stateParams, AllCharacters }: IUseFilter) => {
  const filteredCharacters = AllCharacters.filter(
    (character) => character.params.Agressive === stateParams.Agressive,
  ).filter((character) => character.params.PersonClass === stateParams.PersonClass);

  return filteredCharacters;
};

export default useFilter;
