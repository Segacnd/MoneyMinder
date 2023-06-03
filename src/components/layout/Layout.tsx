import * as React from 'react';

import Navigation from '@/components/layout/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='bg-primary-400 flex w-screen'>
      <Navigation />
      {children}
    </div>
  );
}
