import React from 'react';

type Props = {};

const Input = (props: Props) => {
  return (
    <input
      type="text"
      name="email"
      id="email"
      className="bg-black text-white h-full w-full flex justify-center items-center rounded-lg px-2 outline-none"
      placeholder="john@doe.com"
    />
  );
};

export default Input;
