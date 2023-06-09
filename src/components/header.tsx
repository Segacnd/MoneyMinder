import * as React from 'react';

import { useAppSelector } from '@/redux/store';

export default function HeaderComponent() {
  const { currency } = useAppSelector((state) => state.userReducer);
  return (
    <header className='bg-dark text-primary-500 flex h-[100px] items-center justify-end gap-4 text-2xl'>
      daily limit: <span className='text-white'>30{currency}</span>
    </header>
  );
}
