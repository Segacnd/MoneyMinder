import * as React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { Input } from '@/components/inputs/Input';

export default function DailyLimit() {
  const { control, watch } = useForm<FieldValues>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const dailyLimitValue = watch('dailyLimit');

  return (
    <div className='relative w-full'>
      <form>
        <Controller
          defaultValue=''
          name='dailyLimit'
          control={control}
          render={({ field }) => (
            <Input
              placeholder='Daily limit:'
              type='text'
              isClear={!!dailyLimitValue?.length}
              {...field}
            />
          )}
        />
      </form>
    </div>
  );
}
