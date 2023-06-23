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
  disabled?: boolean;
  placeholder: string;
  list: string[];
  name: string;
  register: UseFormRegister<FieldValues>;
  defaultValue?: string;
};

export const Select = (props: SelectProps) => {
  const { list, register, placeholder, defaultValue, name } = props;
  const [value, setValue] = React.useState(defaultValue || '');
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='relative w-full text-white '>
      <button
        type='button'
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`bg-dark flex flex h-10 w-full items-center justify-between gap-4 rounded px-2 py-4 `}
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
        className='absolute left-0 top-[100%] z-40 mt-4 flex w-full flex-wrap gap-2'
      >
        {list.map((el) => (
          <label
            onClick={() => {
              setValue(el);
              setIsOpen(false);
            }}
            className='text-primary-50 bg-dark hover:text-primary-400 hover:border-primary-400 flex h-[50px] w-[90px] cursor-pointer flex-col items-center justify-center rounded hover:border-[1px] '
            key={`${el} ${name}`}
            htmlFor={`${el}${name}`}
          >
            <input
              className='hidden'
              {...register(name)}
              type='radio'
              name={name}
              value={el}
              id={`${el}${name}`}
            />
            {el}
          </label>
        ))}
      </motion.div>
    </div>
  );
};
