import * as React from 'react';

import { SelectInput } from '@/components/inputs/selectInput';

import { currencyList } from '@/constants';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

export default function SelectCurrency() {
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector((state) => state.userReducer);

  const currencySymbolsList: string[] = [];

  currencyList.forEach((el) => {
    currencySymbolsList.push(el.symbol);
  });

  return (
    <>
      <SelectInput
        name='currency'
        value={currency}
        list={currencySymbolsList}
        placeholder='Base currency: '
        clickHandler={(value) => dispatch(userActions.changeCurrency(value))}
      />
    </>
  );
}
