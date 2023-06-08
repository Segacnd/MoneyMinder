import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type validationToastState = {
  isValidationToastOpen: boolean;
  name: string;
  errors: string[];
  errorsTemplate: string[];
  isInputActive: boolean;
  isClear: boolean;
};

const initialState: validationToastState = {
  isValidationToastOpen: false,
  name: '',
  errors: [],
  errorsTemplate: [],
  isInputActive: false,
  isClear: false,
};

export const validationToastSlice = createSlice({
  name: 'validationToast',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<validationToastState>) {
      state.isValidationToastOpen = action.payload.isValidationToastOpen;
      state.name = action.payload.name;
      state.errors = action.payload.errors;
      state.errorsTemplate = action.payload.errorsTemplate;
      state.isInputActive = action.payload.isInputActive;
      state.isClear = action.payload.isClear;
    },
    hideToast(state) {
      state.isValidationToastOpen = false;
    },
  },
});

export const {
  reducer: validationToastReducer,
  actions: validationToastActions,
} = validationToastSlice;
