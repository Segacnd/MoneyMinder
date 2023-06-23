import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/inputs/Input';
import { Select } from '@/components/inputs/Select';

import { currencySymbolsList, generateNewId } from '@/constants';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { incomeSchema } from '@/yup/schemas';

export type AddIncomeType = {
  currency: string;
  jobTitle: string;
  incomeDate: string;
  ammount: string;
  id: number;
};

type AddIncomeProps = {
  changedIncome?: AddIncomeType;
  closeForm: (value: boolean) => void;
};

export default function AddIncome({
  closeForm,
  changedIncome,
}: AddIncomeProps) {
  const { incomes } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const { handleSubmit, control, watch, reset, register, formState } =
    useForm<FieldValues>({
      mode: 'onChange',
      resolver: yupResolver(incomeSchema),
      criteriaMode: 'all',
    });

  const jobTitleValue = watch('jobTitle');
  const incomeDateValue = watch('incomeDate');
  const ammountValue = watch('ammount');
  const handleIncome = (data: FieldValues) => {
    if (!changedIncome) {
      const id = generateNewId(incomes);
      dispatch(userActions.addIncome({ ...data, id } as AddIncomeType));
    } else {
      dispatch(
        userActions.editIncome({
          id: changedIncome.id,
          newIncome: data as AddIncomeType,
        })
      );
    }
    reset({});
    closeForm(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleIncome)}
        className=' relative grid w-full grid-cols-4 gap-2'
      >
        <Controller
          defaultValue={changedIncome?.jobTitle || ''}
          name='jobTitle'
          control={control}
          render={({ field }) => (
            <Input
              autofocus={true}
              type='text'
              placeholder='Add title'
              isClear={!!jobTitleValue?.length}
              {...field}
            />
          )}
        />

        <Select
          list={currencySymbolsList}
          placeholder='currency'
          name='currency'
          register={register}
          defaultValue={changedIncome?.currency || ''}
        />

        <Controller
          defaultValue={changedIncome?.incomeDate || ''}
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
          defaultValue={changedIncome?.ammount || ''}
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
        <div className='absolute top-1/2 grid w-full grid-cols-4 gap-2'>
          {formState.errors.jobTitle ? (
            <div className='bg-errorClr z-10 h-1 rounded'></div>
          ) : (
            <div></div>
          )}
          {formState.errors.currency ? (
            <div className='bg-errorClr z-10 h-1 rounded'></div>
          ) : (
            <div></div>
          )}
          {formState.errors.incomeDate ? (
            <div className='bg-errorClr z-10 h-1 rounded'></div>
          ) : (
            <div></div>
          )}
          {formState.errors.ammount ? (
            <div className='bg-errorClr z-10 h-1 rounded'></div>
          ) : (
            <div></div>
          )}
        </div>
        <Button
          onClick={() => handleSubmit(handleIncome)}
          className='col-start-4 col-end-5 flex justify-center text-[2px]'
          type='submit'
        >
          Create income
        </Button>
      </form>
    </>
  );
}
