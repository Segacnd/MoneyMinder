import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/buttons/Button';

import CloseIcon from '@/assets/icons/close';

export default function IncomePopupPage() {
  return (
    <motion.div className='absolute inset-0 flex items-center justify-center bg-[#f4f4f407] backdrop-blur'>
      <div className='relative flex h-[460px] w-[400px] flex-col  justify-start gap-4 rounded-xl bg-black px-12 py-10 text-white'>
        <button className='absolute right-8 top-4'>
          <CloseIcon />
        </button>
        <h2 className='text-center'>Add income</h2>
        <Button className='mt-auto flex w-full items-center justify-center'>
          Create
        </Button>
      </div>
    </motion.div>
  );
}
