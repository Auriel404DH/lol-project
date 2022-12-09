import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './slices/characterSlice';
import answersSlice from './slices/answersSlice';
import storySlice from './slices/storySlice';

const store = configureStore({
  reducer: {
    answers: answersSlice,
    characters: characterSlice,
    story: storySlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
