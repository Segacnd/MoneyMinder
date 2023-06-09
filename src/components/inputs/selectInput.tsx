import { motion } from 'framer-motion';
import * as React from 'react';

import { Input } from '@/components/inputs/Input';

import { arrowRotateAnimation, arrowTransition } from '@/animations/animations';
import ArrowDown from '@/assets/icons/arrowDown';

type SelectInputProps = {
  name: string;
  value: string;
  list: string[];
  placeholder: string;
  clickHandler: (value: string) => void;
};

// type lala = Omit<Currency, 'currency'>;
export const SelectInput = ({
  name,
  value,
  list,
  placeholder,
  clickHandler,
}: SelectInputProps) => {
  const [isOptions, setIsOptions] = React.useState(false);
  const [isInputActive, setIsInputActive] = React.useState(false);

  const isInputActiveCB = React.useCallback((value: boolean) => {
    setIsInputActive(value);
    setIsOptions(false);

    if (value) {
      setIsOptions(true);
      ('lalal');
    }
  }, []);

  const buttonHandler = (value: string) => {
    clickHandler(value);
    setIsOptions(false);
  };

  return (
    <div className='relative'>
      <Input
        name={name}
        placeholder={placeholder}
        isClear={!!value.length}
        isInputActiveCB={isInputActiveCB}
        type='text'
        value={value}
      />
      <motion.div
        whileInView='show'
        animate={isOptions || isInputActive ? 'up' : 'down'}
        transition={arrowTransition}
        variants={arrowRotateAnimation}
        className='absolute right-2 top-4 '
      >
        <ArrowDown />
      </motion.div>

      {(isOptions || isInputActive) && (
        <div className='bg-dark absolute left-0 top-8 flex w-[100%] flex-col p-2'>
          {list.map((el) => (
            <button
              type='button'
              onMouseDown={() => buttonHandler(el)}
              className='bg-dark'
              key={el}
            >
              {el}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
