import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from './axios';

export const userCharacter = createAsyncThunk(
  'characters/userRequest',
  async ({ character }: { character: string }) => {
    try {
      const { data } = await instance.get(
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${character}.json`,
      );

      const dataCharacter = Object.values(data.data)[0];

      return dataCharacter;
    } catch (error) {
      console.log(error);
    }
  },
);
