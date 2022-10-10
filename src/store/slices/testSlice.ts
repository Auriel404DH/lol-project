import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Test = {
  title: string;
  work: boolean;
  die: boolean;
};

type InitialState = {
  list: Test[];
};

const initialState: InitialState = {
  list: [],
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.list.push({
        title: action.payload,
        work: true,
        die: true,
      });
    },
    deleteTask: (state, action) => {
      return;
    },
  },
});

export const { addTask, deleteTask } = testSlice.actions;
export default testSlice.reducer;
