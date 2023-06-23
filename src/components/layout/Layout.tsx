import * as React from 'react';

import HeaderComponent from '@/components/header';
import Navigation from '@/components/layout/Navigation';
import ValidationToast from '@/components/toasts/validationToast';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-dark relative flex h-screen w-screen overflow-hidden pr-10'>
      <Navigation />
      <div className=' flex w-full flex-col pb-10'>
        <ValidationToast />
        <HeaderComponent />
        {children}
      </div>
    </div>
  );
}
