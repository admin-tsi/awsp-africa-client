import React, { ReactNode } from 'react';

type InputProps = {
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  children?: ReactNode;
};

const Input = (props: InputProps) => {
  const {
    type = 'text',
    name = 'email',
    id = 'email',
    placeholder = 'john@doe.com',
    children
  } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      className = "bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};

export default Input;
