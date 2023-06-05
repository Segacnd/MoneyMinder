import * as React from 'react';

type TTextInput = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
};

export default function TextInput({ name, placeholder, type }: TTextInput) {
  const [value, setValue] = React.useState('');
  const placeholderState = value
    ? 'top-[-8px] text-xs left-[2px]'
    : 'left-[10px] top-[8px]';
  return (
    <div className='bg-dark relative h-[40px] min-w-[200px] rounded-lg'>
      <input
        className='bg-dark peer h-full w-full  rounded-lg border-0 border-transparent focus:border-transparent focus:ring-0'
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={name}
      />
      <label
        htmlFor={name}
        className={`text-placeGray absolute left-[10px] top-[8px] duration-300 ease-in peer-focus:left-[2px] peer-focus:top-[-8px] peer-focus:text-xs ${placeholderState} `}
      >
        {placeholder}
      </label>
    </div>
  );
}
