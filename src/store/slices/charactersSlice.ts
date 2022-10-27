import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActionAnswer2 } from '../../models/IAnswerAction';

type InitialState = {
  answers2: any;
};

const initialState: InitialState = {
  answers2: {},
};

export const AnswerSlice = createSlice({
  name: 'Answer',
  initialState,
  reducers: {
    addAnswer2: (state, action: PayloadAction<IActionAnswer2>) => {
      const newAnswers2 = {
        ...state.answers2,
        [action.payload.param]: action.payload.answer,
      };

      state.answers2 = newAnswers2;
    },

    removeAnswers: (state) => {
      state.answers2 = {};
    },
  },
});

export const { addAnswer2, removeAnswers } = AnswerSlice.actions;
export default AnswerSlice.reducer;
