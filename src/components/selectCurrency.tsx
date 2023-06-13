import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { SelectInput } from '@/components/inputs/selectInput';

import { currencySymbolsList } from '@/constants';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

export default function SelectCurrency() {
  const dispatch = useAppDispatch();

  const { control } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const { currency } = useAppSelector((state) => state.userReducer);

  return (
    <div className='w-full'>
      <form>
        <Controller
          defaultValue={currency}
          name='baseCurrency'
          control={control}
          render={({ field: { onChange } }) => (
            <SelectInput
              name='baseCurrency'
              isClear={!!currency?.length}
              list={currencySymbolsList}
              placeholder='Base currency:'
              clickHandler={(value) => {
                onChange(dispatch(userActions.changeCurrency(value)));
              }}
              value={currency}
            />
          )}
        />
      </form>
    </div>
  );
}
