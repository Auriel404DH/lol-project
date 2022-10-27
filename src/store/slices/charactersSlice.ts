import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActionAnswer } from '../../models/IAnswerAction';

type Answer = {
  questionId: string | number;
  answer: {
    answerId: string | number;
    answerText: string;
  };
};

type InitialState = {
  character: Answer[];
};

const initialState: InitialState = {
  character: [],
};

export const AnswerSlice = createSlice({
  name: 'Answer',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IActionAnswer>) => {
      state.character.push({
        questionId: action.payload.questionId,
        answer: {
          answerId: action.payload.answerId,
          answerText: action.payload.answerText,
        },
      });
    },
    removeAnswers: (state) => {
      state.character = [];
    },
  },
});

export const { addAnswer, removeAnswers } = AnswerSlice.actions;
export default AnswerSlice.reducer;
