import { motion } from 'framer-motion';
import * as React from 'react';

import { Input } from '@/components/inputs/Input';

import { arrowRotateAnimation, arrowTransition } from '@/animations/animations';
import ArrowDown from '@/assets/icons/arrowDown';

type SelectInputProps = {
  name: string;
  isClear: boolean;
  list: string[];
  placeholder: string;
  clickHandler: (value: string) => void;
  value: string;
};

// type lala = Omit<Currency, 'currency'>;
export const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
  (props, ref) => {
    const { clickHandler, list, ...other } = props;
    const [isOptions, setIsOptions] = React.useState(false);
    const [isInputActive, setIsInputActive] = React.useState(false);

    const isInputActiveCB = React.useCallback((value: boolean) => {
      setIsInputActive(value);
      setIsOptions(false);

      if (value) {
        setIsOptions(true);
      }
    }, []);

    const buttonHandler = (value: string) => {
      clickHandler(value);
      setIsOptions(false);
    };

    return (
      <div className='relative'>
        <Input
          ref={ref}
          isInputActiveCB={isInputActiveCB}
          type='text'
          {...other}
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
  }
);
