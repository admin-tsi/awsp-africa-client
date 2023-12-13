import React from 'react';
import Input from './Input';

type Props = {};

const Loginform = (props: Props) => {
  return (
    <section className="h-96 w-[558px] rounded-lg bg-[#1A1A1A] border border-black shadow-xl m-5 lg:mx-0">
      <div className="h-1/4 bg-[#222222] rounded-lg flex justify-center items-center">
        <span className="text-3xl font-semibold text-white">Login</span>
      </div>
      <div className="p-8 flex flex-col space-y-6 ">
        <div className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative">
          <span className="text-white w-[30%]  flex justify-start items-center px-3">
            Email *
          </span>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="john@doe.com"
          />
        </div>
        <div className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative">
          <span className="text-white w-[30%] max-lg:w-fit flex justify-start items-center px-3">
            Password *
          </span>
          <Input
            type="password"
            name="email"
            id="email"
            placeholder="****************"
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-white p-2 rounded-md font-semibold">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Loginform;