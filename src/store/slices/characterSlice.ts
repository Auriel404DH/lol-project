import { ICharacter } from './../../models/ICharacter';
import { fetchCharacters } from '../actions/CharactersAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isLoading: boolean;
  error: null | string;
  champions: ICharacter[] | [];
};

const initialState: InitialState = {
  isLoading: false,
  error: null,
  champions: [],
};

export const characterSlice = createSlice({
  name: 'Character',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchCharacters.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<ICharacter[]>) => {
      state.error = null;
      state.isLoading = false;
      state.champions = action.payload;
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
