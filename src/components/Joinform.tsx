import React from 'react';
import Input from './Input';
import Processbtn from './Processbtn';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  onNext: () => void;
};

const Joinform = ({ onNext }: Props) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const handleNextClick = () => {
    onNext();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="h-fit w-fit space-y-5 bg-neutral flex flex-col items-center border-[1px] border-black shadow-2xl rounded-md p-5 max-lg:m-5"
      >
        <span className="h-1/3 flex justify-center items-center text-white text-4xl font-bold">
          Join us
        </span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
          className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative border-[2px] border-zinc-900 shadow-black shadow-lg"
        >
          <span className="text-white w-[25%] flex justify-center items-center">
            Email *
          </span>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your password"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
          className="flex w-full items-center my-5"
        >
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 rounded outline-none outline-offset-0"
          />
          <label
            htmlFor="link-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 my-3"
          >
            I acknowledge and agree to the{' '}
            <a href="#" className="text-white dark:text-white hover:underline">
              General Conditions of Sale and Use
            </a>
            .
          </label>
        </motion.div>
        <div className="w-full flex justify-end">
          <Processbtn onClick={handleNextClick} label="Next" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Joinform;
