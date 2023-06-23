import * as React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { Select } from '@/components/inputs/Select';

import { currencySymbolsList } from '@/constants';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

export default function SelectCurrency() {
  const { currency } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, watch } = useForm<FieldValues>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const baseCurrencyValue = watch('baseCurrency');
  const handleSave = React.useCallback(
    (data: FieldValues) => {
      dispatch(userActions.changeCurrency(data.baseCurrency));
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (baseCurrencyValue?.length) {
      handleSave({ baseCurrency: baseCurrencyValue });
    }
  }, [baseCurrencyValue, handleSave]);
  return (
    <div className='relative w-full'>
      <form onSubmit={handleSubmit(handleSave)}>
        <Select
          list={currencySymbolsList}
          placeholder='Base currency:'
          name='baseCurrency'
          register={register}
          defaultValue={currency}
        />
      </form>
    </div>
  );
}
