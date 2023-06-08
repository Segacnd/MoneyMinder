import React, { FocusEvent, useEffect, useState } from 'react';

import { validationToastActions } from '@/redux/slices/validationToastSlice';
import { useAppDispatch } from '@/redux/store';

export interface IInputProps {
  name: string;
  type: string;
  placeholder: string;
  errors?: string[];
  errorsTemplate?: string[];
  isClear: boolean;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const [isInputActive, setIsInputActive] = useState(false);
    const dispatch = useAppDispatch();
    const {
      errors,
      type,
      onFocus,
      errorsTemplate,
      onBlur,
      name,
      placeholder,
      isClear,
      ...otherprops
    } = props;

    const placeholderState = isClear
      ? 'top-[-8px] text-xs left-[2px]'
      : 'left-[10px] top-[8px]';

    const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsInputActive(false);

      if (onBlur) {
        onBlur(e);
      }
    };

    const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsInputActive(true);

      if (onFocus) {
        onFocus(e);
      }
    };

    useEffect(() => {
      if (isInputActive) {
        errors &&
          errorsTemplate &&
          dispatch(
            validationToastActions.showToast({
              isValidationToastOpen: true,
              name,
              errors,
              errorsTemplate,
              isInputActive,
              isClear,
            })
          );
      }
    }, [dispatch, isInputActive, errors, errorsTemplate, name, isClear]);

    return (
      <>
        <div className='bg-dark relative h-[40px] min-w-[200px] rounded-lg'>
          <input
            type={type}
            className='bg-dark peer h-full w-full  rounded-lg border-0 border-transparent focus:border-transparent focus:ring-0'
            ref={ref}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            id={name}
            name={name}
            {...otherprops}
          />
          <label
            htmlFor={name}
            className={`text-placeGray absolute duration-300 ease-in peer-focus:left-[2px] peer-focus:top-[-8px] peer-focus:text-xs ${placeholderState} `}
          >
            {placeholder}
          </label>
        </div>
      </>
    );
  }
);