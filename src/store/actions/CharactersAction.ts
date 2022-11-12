import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('characters/fetchRequest', async () => {
  try {
    const { data } = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json',
    );

    const charactersArray = await Object.values(data.data);

    return charactersArray;
  } catch (error) {
    console.log(error);
  }
});
