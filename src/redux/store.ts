import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { userReducer } from '@/redux/slices/userSlice';
import { validationToastReducer } from '@/redux/slices/validationToastSlice';
export const store = configureStore({
  reducer: {
    userReducer,
    validationToastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
