import { ICharacter } from './ICharacter';
import { ICharactersParams } from './types';

export interface IUseFilter {
  userParams: ICharactersParams;
  characterParams: ICharacter[];
}
