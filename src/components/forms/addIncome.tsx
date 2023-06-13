import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/inputs/Input';

import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch } from '@/redux/store';

export type AddIncome = {
  jobTitle: string;
  currency: string;
  incomeDate: string;
  ammount: string;
};

export default function AddIncome() {
  const dispatch = useAppDispatch();

  const { handleSubmit, control, watch, reset } = useForm<AddIncome>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const jobTitleValue = watch('jobTitle');
  const currencyValue = watch('currency');
  const incomeDateValue = watch('incomeDate');
  const ammountValue = watch('ammount');

  const handleIncome = (data: AddIncome) => {
    dispatch(userActions.addIncome(data));
    reset({});
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleIncome)}
        className=' grid w-full grid-cols-4 gap-2'
      >
        <Controller
          defaultValue=''
          name='jobTitle'
          control={control}
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Add title'
              isClear={!!jobTitleValue?.length}
              {...field}
            />
          )}
        />

        <Controller
          defaultValue=''
          name='currency'
          control={control}
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Add currency'
              isClear={!!currencyValue?.length}
              {...field}
            />
          )}
        />

        <Controller
          defaultValue=''
          name='incomeDate'
          control={control}
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Add income date'
              isClear={!!incomeDateValue?.length}
              {...field}
            />
          )}
        />

        <Controller
          defaultValue=''
          name='ammount'
          control={control}
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Add ammount'
              isClear={!!ammountValue?.length}
              {...field}
            />
          )}
        />
        <Button
          onClick={() => handleSubmit(handleIncome)}
          className='col-start-4 col-end-5 flex justify-center'
          type='submit'
        >
          Create income
        </Button>
      </form>
    </>
  );
}
