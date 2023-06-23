import * as React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { Input } from '@/components/inputs/Input';
import { Select } from '@/components/inputs/Select';

import { currencySymbolsList } from '@/constants';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch } from '@/redux/store';

type SaveEachMonth = {
  saveEachMonth: string;
  saveEachMonthCurrency: string;
};

export default function SaveEachMonth() {
  const dispatch = useAppDispatch();

  const { handleSubmit, register, control, watch } = useForm<FieldValues>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const saveEachValue = watch('saveEachMonth');
  const saveEachMonthCurrency = watch('saveEachMonthCurrency');

  const handleSave = React.useCallback(
    (data: FieldValues) => {
      dispatch(
        userActions.setSaveEachMonth(
          `${data.saveEachMonth} ${data.saveEachMonthCurrency}`
        )
      );
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (saveEachValue && saveEachMonthCurrency) {
      handleSave({
        saveEachMonth: saveEachValue,
        saveEachMonthCurrency: saveEachMonthCurrency,
      });
    }
  }, [saveEachValue, saveEachMonthCurrency, handleSave]);

  return (
    <form
      autoComplete='off'
      onSubmit={handleSubmit(handleSave)}
      className='bg-dark relative flex w-full rounded'
    >
      <Controller
        defaultValue=''
        name='saveEachMonth'
        control={control}
        render={({ field }) => (
          <Input
            type='text'
            placeholder='Save each month:'
            isClear={!!saveEachValue?.length}
            {...field}
          />
        )}
      />

      <div className='flex-1'>
        <Select
          list={currencySymbolsList}
          placeholder=''
          name='saveEachMonthCurrency'
          register={register}
          defaultValue={currencySymbolsList[1]}
        />
      </div>
    </form>
  );
}
