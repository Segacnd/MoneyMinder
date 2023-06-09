import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  currency: string;
};

const initialState: UserState = {
  currency: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
