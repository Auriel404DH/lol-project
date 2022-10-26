import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActionAnswer } from '../../models/IAnswerAction';

type Answer = {
  questionId: string | number;
  answer: {
    answerId: string | boolean;
    answerText: string;
  };
};

type InitialState = {
  answers: Answer[];
};

const initialState: InitialState = {
  answers: [],
};

export const AnswerSlice = createSlice({
  name: 'Answer',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IActionAnswer>) => {
      state.answers.push({
        questionId: action.payload.questionId,
        // [action.payload.param]: action.payload.answerId,

        answer: {
          answerId: action.payload.answerId,
          answerText: action.payload.answerText,
        },
      });
    },
    removeAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { addAnswer, removeAnswers } = AnswerSlice.actions;
export default AnswerSlice.reducer;
