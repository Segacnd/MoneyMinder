import * as React from 'react';

import SupportText from '@/components/popup/supportText';

import { useAppSelector } from '@/redux/store';

export default function HelperViewer({
  children,
}: {
  children: React.JSX.Element;
}) {
  const [isMouseIn, setIsMouseIn] = React.useState(false);
  const { incomes } = useAppSelector((state) => state.userReducer);
  return (
    <div
      className='relative w-full'
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
    >
      {!incomes.length && isMouseIn && (
        <SupportText text='Please, add income before editing base currency' />
      )}
      {!incomes.length && isMouseIn && (
        <div className='lft-0 absolute top-0 z-20 h-full  w-full cursor-not-allowed'></div>
      )}
      {children}
    </div>
  );
}
