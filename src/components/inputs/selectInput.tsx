import * as React from 'react';

import { Input } from '@/components/inputs/Input';

import { Currency } from '@/interfaces';

type SelectInputProps = {
  placeholder: string;
  name: string;
  isClear: boolean;
  currencyList: Currency[];
};
// type lala = Omit<Currency, 'currency'>;
export const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
  (props, ref) => {
    const { currencyList, isClear, ...otherProps } = props;
    const [isOptions, setIsOptions] = React.useState(false);
    const [choosenCurrency, setChoosenCurrency] = React.useState<string>('');
    const [isInputActive, setIsInputActive] = React.useState(false);

    const isInputActiveCB = React.useCallback((value: boolean) => {
      setIsInputActive(value);
      if (value) {
        setIsOptions(true);
      }
    }, []);

    const buttonHandler = (value: string) => {
      setChoosenCurrency(value);
      setIsOptions(false);
    };

    return (
      <div className='relative'>
        <Input
          ref={ref}
          {...otherProps}
          isClear={isClear}
          isInputActiveCB={isInputActiveCB}
          type='text'
          value={choosenCurrency}
        />
        {(isInputActive || isOptions) && (
          <div className='bg-dark absolute left-0 top-8 flex w-[100%] flex-col p-2'>
            {currencyList.map((el) => (
              <button
                type='button'
                onClick={() => buttonHandler(el.symbol)}
                className='bg-dark'
                key={el.symbol}
              >
                {el.symbol}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);
