import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/textInput';

import CloseIcon from '@/assets/icons/close';

export default function IncomePopupPage() {
  return (
    <motion.div className='absolute inset-0 flex items-center justify-center bg-[#f4f4f407] backdrop-blur'>
      <div className='relative flex h-[460px] w-[400px] flex-col  justify-start gap-4 rounded-xl bg-black px-12 py-10 text-white'>
        <button className='absolute right-8 top-4'>
          <CloseIcon />
        </button>
        <h2 className='text-center'>Add income</h2>
        <TextInput
          placeholder='Enter your job name'
          name='jobname'
          type='text'
        />
        <TextInput
          placeholder='Enter your currency'
          name='currency'
          type='text'
        />
        <TextInput
          placeholder='Enter your income date'
          name='date'
          type='text'
        />
        <TextInput
          placeholder='Enter your ammount'
          name='ammount'
          type='number'
        />
        <Button className='mt-auto flex w-full items-center justify-center'>
          Create
        </Button>
      </div>
    </motion.div>
  );
}
