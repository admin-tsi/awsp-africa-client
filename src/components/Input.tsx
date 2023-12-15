import React from 'react';
import { InputProps } from '@/utils/interfaces';

const Input = (props: InputProps) => {
  const {
    type = 'text',
    name = 'email',
    id = 'email',
    placeholder = 'john@doe.com',
    className = '',
  } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md focus:bg-neutral2 ${className}`}
      placeholder={placeholder}
      required={true}
    />
  );
};

export default Input;
