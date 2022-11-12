import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './slices/characterSlice';
import answersSlice from './slices/answersSlice';

const store = configureStore({
  reducer: {
    answers: answersSlice,
    characters: characterSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
