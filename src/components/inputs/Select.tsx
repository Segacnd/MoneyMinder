import { motion } from 'framer-motion';
import * as React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import {
  arrowRotateAnimation,
  arrowTransition,
  incomeAnimation,
  incomeTransition,
} from '@/animations/animations';
import ArrowDown from '@/assets/icons/arrowDown';

type SelectProps = {
  placeholder: string;
  list: string[];
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const Select = (props: SelectProps) => {
  const { list, register, placeholder } = props;
  const [value, setValue] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='relative text-white'>
      <button
        type='button'
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className='bg-dark flex flex h-10 min-w-[160px] items-center justify-between gap-10 rounded px-2 py-4'
      >
        <div
          className={`${
            value.length || isOpen
              ? 'left-[-2px] top-[-8px] text-sm'
              : 'left-[6px] top-[8px]'
          } text-placeGray  absolute duration-300 ease-in`}
        >
          {placeholder}
        </div>
        <p>{value}</p>
        <motion.div
          animate={isOpen ? 'up' : 'down'}
          transition={arrowTransition}
          variants={arrowRotateAnimation}
        >
          <ArrowDown />
        </motion.div>
      </button>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={incomeAnimation}
        animate={isOpen ? 'show' : 'hide'}
        transition={incomeTransition}
        className='absolute bottom-[-60px] left-0 mt-4 flex flex-wrap gap-2'
      >
        {list.map((el) => (
          <label
            onClick={() => {
              setValue(el);
              setIsOpen(false);
            }}
            className={`${
              value === el
                ? 'hidden'
                : 'text-primary-50 bg-dark hover:text-primary-400 hover:border-primary-400 flex h-[50px] w-[90px] cursor-pointer flex-col items-center justify-center rounded hover:border-[1px] '
            }`}
            key={el}
            htmlFor={el}
          >
            <input
              className='hidden'
              {...register('test')}
              type='radio'
              name='test'
              value={el}
              id={el}
            />
            {el}
          </label>
        ))}
      </motion.div>
    </div>
  );
};
