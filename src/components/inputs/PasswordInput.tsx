import * as React from 'react';

import { IInputProps, Input } from '@/components/inputs/Input';

import CloseEye from '@/assets/icons/closeEye';
import OpenEye from '@/assets/icons/openEye';

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  Omit<IInputProps, 'type'>
>((props, ref) => {
  const [isPassword, setIsPassword] = React.useState(true);
  return (
    <div className='relative'>
      <Input {...props} ref={ref} type={isPassword ? 'password' : 'text'} />
      <button
        className='absolute right-4 top-2'
        type='button'
        onClick={() => setIsPassword((prev) => !prev)}
      >
        {isPassword ? <CloseEye /> : <OpenEye />}
      </button>
    </div>
  );
});
