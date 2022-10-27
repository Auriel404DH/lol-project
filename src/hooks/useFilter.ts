import { IUseFilter } from './../models/IUseFilter';

const useFilter = ({ stateParams, AllCharacters }: IUseFilter) => {
  const firstFilter = AllCharacters.filter(
    (character) => character.params.Agressive === stateParams.Agressive,
  );

  const secondFilter = firstFilter.filter(
    (character) => character.params.PersonClass === stateParams.PersonClass,
  );

  return secondFilter;
};

export default useFilter;
