import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { SelectInput } from '@/components/inputs/selectInput';

import { currencyList } from '@/constants';

export default function SelectedCurrency() {
  const { handleSubmit, control, watch } = useForm<{
    currency: string;
  }>({
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const handleRegistration = (data: { currency: string }) => alert(data);
  const currency = watch('currency');
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <Controller
        defaultValue=''
        name='currency'
        control={control}
        render={({ field }) => (
          <SelectInput
            placeholder='lalal'
            isClear={!!currency?.length}
            currencyList={currencyList}
            {...field}
          />
        )}
      />
    </form>
  );
}
