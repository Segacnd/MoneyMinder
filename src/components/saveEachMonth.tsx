import * as React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { Input } from '@/components/inputs/Input';
import { SelectInput } from '@/components/inputs/selectInput';

import { currencySymbolsList } from '@/constants';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch } from '@/redux/store';

type SaveEachMonth = {
  saveEachMonth: string;
  saveEachMonthCurrency: string;
};

export default function SaveEachMonth() {
  const dispatch = useAppDispatch();
  const [choosenCurrency, setChoosenCurrency] = React.useState(
    currencySymbolsList[1]
  );

  const { handleSubmit, control, watch } = useForm<SaveEachMonth>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const saveEachValue = watch('saveEachMonth');
  const saveEachMonthCurrency = watch('saveEachMonthCurrency');

  const handleSave = (data: FieldValues) => {
    // console.log(`${data.saveEachMonth} ${choosenCurrency}`)
    dispatch(
      userActions.setSaveEachMonth(`${data.saveEachMonth} ${choosenCurrency}`)
    );
  };

  return (
    <div className='relative w-full'>
      <form autoComplete='off' onSubmit={handleSubmit(handleSave)}>
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
        <div className='border-placeGray absolute right-0 top-0 w-[70px] border-l-[1px]'>
          <Controller
            name='saveEachMonthCurrency'
            control={control}
            render={({ field: { onChange } }) => (
              <SelectInput
                name='saveEachMonthCurrency'
                isClear={!!saveEachMonthCurrency?.length}
                list={currencySymbolsList}
                placeholder=''
                value={choosenCurrency}
                clickHandler={(value) => {
                  onChange(setChoosenCurrency(value));
                }}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}
