import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from './axios';

export const fetchCharacters = createAsyncThunk('characters/fetchRequest', async () => {
  return instance
    .get('http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json')
    .then((res) => {
      return Object.values(res.data.data);
    });

  // const charactersArray: ICharacter[] = await Object.values(data.data);

  // return charactersArray;
});
