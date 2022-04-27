import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import auth from './slices/authSlice';

export const store = configureStore({
  reducer: {
      auth
  },
})
export type RootState = ReturnType<typeof store.getState>;
export type PassDispatch = typeof store.dispatch;
export const usePassDispatch = () => useDispatch<PassDispatch>();
export const usePassSelector: TypedUseSelectorHook<RootState> = useSelector;