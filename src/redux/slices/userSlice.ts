import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddIncomeType } from '@/components/forms/addIncome';

type UserState = {
  currency: string;
  incomes: AddIncomeType[];
  saveEachMonth: string;
};

const initialState: UserState = {
  currency: '',
  incomes: [],
  saveEachMonth: '',
};
type EditedIncomesProps = {
  id: number;
  newIncome: AddIncomeType;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
    addIncome(state, action: PayloadAction<AddIncomeType>) {
      state.incomes.push(action.payload);
    },
    editIncome(state, action: PayloadAction<EditedIncomesProps>) {
      const editedIncomes = state.incomes.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload.newIncome;
        } else {
          return el;
        }
      });

      state.incomes = editedIncomes;
    },
    deleteIncome(state, action: PayloadAction<number>) {
      const newIncomes = state.incomes.filter(
        (item) => item.id !== action.payload
      );
      state.incomes = newIncomes;
    },
    setSaveEachMonth(state, action: PayloadAction<string>) {
      state.saveEachMonth = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
