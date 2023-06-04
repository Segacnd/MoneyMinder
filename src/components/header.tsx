import * as React from 'react';

export default function HeaderComponent() {
  return (
    <header className='bg-dark text-primary-500 flex h-[100px] items-center justify-end gap-4 text-2xl'>
      daily limit: <span className='text-white'>30$</span>
    </header>
  );
}
