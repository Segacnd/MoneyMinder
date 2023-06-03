import * as React from 'react';

import HeaderComponent from '@/components/header';
import Navigation from '@/components/layout/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='bg-dark flex w-screen pr-10'>
      <Navigation />
      <div className=' flex w-full flex-col '>
        <HeaderComponent />
        {children}
      </div>
    </div>
  );
}
