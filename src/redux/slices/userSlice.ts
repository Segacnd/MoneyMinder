import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddIncome } from '@/components/forms/addIncome';

type UserState = {
  currency: string;
  incomes: AddIncome[];
  saveEachMonth: string;
};

const initialState: UserState = {
  currency: '',
  incomes: [],
  saveEachMonth: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
    addIncome(state, action: PayloadAction<AddIncome>) {
      state.incomes.push(action.payload);
    },
    setSaveEachMonth(state, action: PayloadAction<string>) {
      state.saveEachMonth = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
