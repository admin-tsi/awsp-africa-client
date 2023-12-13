import React from 'react';
import Input from './Input';

type Props = {};

const Joinform = (props: Props) => {
  return (
    <section className="h-fit w-fit space-y-5 bg-neutral flex flex-col items-center border-[1px] border-black shadow-2xl rounded-md p-5 max-lg:m-5">
      <span className="h-1/3 flex justify-center items-center text-white text-4xl font-bold">
        Join us
      </span>
      <div className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative">
        <span className="text-white w-[25%] flex justify-center items-center">
          Email *
        </span>
        <Input />
      </div>

      <div className="flex w-full items-center my-5">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 rounded outline-none outline-offset-0"
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I acknowledge and agree to the{' '}
          <a href="#" className="text-white dark:text-white hover:underline">
            General Conditions of Sale and Use
          </a>
          .
        </label>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-white p-2 rounded-md font-semibold">Next</button>
      </div>
    </section>
  );
};

export default Joinform;
