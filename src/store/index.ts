import { configureStore } from '@reduxjs/toolkit';
import testSlice from './slices/testSlice';

const store = configureStore({
  reducer: {
    todos: testSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
