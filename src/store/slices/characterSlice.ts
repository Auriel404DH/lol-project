import { ICharacter } from './../../models/ICharacter';
import { fetchCharacters } from '../actions/CharactersAction';
import { userCharacter } from '../actions/userCharacter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserCharacter } from '../../models/IUserCharacter';

type InitialState = {
  isAllCaractersLoading: boolean;
  allCaractersError: null | string;
  champions: ICharacter[] | [];
  isUserCharacterLoading: boolean;
  userCharacterError: null | string;
  champion: IUserCharacter | null;
};

const initialState: InitialState = {
  isAllCaractersLoading: false,
  allCaractersError: null,
  champions: [],
  isUserCharacterLoading: false,
  userCharacterError: null,
  champion: null,
};

export const characterSlice = createSlice({
  name: 'Character',
  initialState,
  reducers: {},

  extraReducers: {
    [userCharacter.pending.type]: (state) => {
      state.isUserCharacterLoading = true;
    },
    [userCharacter.fulfilled.type]: (state, action: PayloadAction<IUserCharacter>) => {
      state.userCharacterError = null;
      state.isUserCharacterLoading = false;
      state.champion = action.payload;
    },
    [userCharacter.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isUserCharacterLoading = false;
      state.userCharacterError = action.payload;
    },

    [fetchCharacters.pending.type]: (state) => {
      state.isAllCaractersLoading = true;
    },
    [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<ICharacter[]>) => {
      state.allCaractersError = null;
      state.isAllCaractersLoading = false;
      state.champions = action.payload;
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isAllCaractersLoading = false;
      state.allCaractersError = action.payload;
    },
  },
});

export default characterSlice.reducer;
