import { motion } from 'framer-motion';
import * as React from 'react';

import {
  supportToastAnimation,
  toastTransition,
} from '@/animations/animations';
import CloseIcon from '@/assets/icons/close';
import { useAppSelector } from '@/redux/store';

export default function ValidationToast() {
  const { isValidationToastOpen, name, errors, errorsTemplate, isClear } =
    useAppSelector((state) => state.validationToastReducer);

  return (
    isValidationToastOpen && (
      <motion.div
        initial='hidden'
        whileInView='visible'
        transition={toastTransition}
        animate={
          isValidationToastOpen && errors.length && isClear ? 'show' : 'hide'
        }
        variants={supportToastAnimation}
        className={`absolute right-[-400px] top-[40px] z-20  min-w-[300px] rounded-l-lg bg-black px-4  text-white shadow-sm ${
          errors?.length ? 'shadow-errorClr' : 'shadow-successClr'
        } py-2`}
      >
        <h4
          className={`${
            errors?.length ? 'text-white' : 'text-successClr'
          } my-2 mb-4 pl-8`}
        >
          {errors?.length ? `${name} validation` : 'Successfull!'}
        </h4>
        {errorsTemplate &&
          errorsTemplate.map((el) => (
            <p
              key={el}
              className={`${
                errors?.includes(el) ? 'text-errorClr' : 'text-successClr'
              }  my-2 flex items-center gap-2 text-lg`}
            >
              <CloseIcon /> {el}
            </p>
          ))}
      </motion.div>
    )
  );
}
