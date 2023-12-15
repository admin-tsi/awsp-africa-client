import React from 'react';
import Input from './Input';
import ProcessButton from './ProcessButton';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  onNext: () => void;
};

const JoinForm = ({ onNext }: Props) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
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
        className="h-fit w-fit space-y-5 flex flex-col items-center shadow-custom rounded-lg p-6 max-lg:m-5"
      >
        <span className="flex justify-center items-center text-white text-2xl font-bold">
          Join us
        </span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
          className="w-full bg-black rounded-lg flex items-center p-3"
        >
          <span className="text-white flex justify-center items-center whitespace-nowrap p-3">
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
        >
          <div className="flex w-full items-center justify-between">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 my-3 pl-1"
            >
              I acknowledge and agree to the
              <a
                href="#"
                className="text-white dark:text-white hover:underline pl-1"
              >
                General Conditions of Sale and Use
              </a>
              .
            </label>
          </div>
        </motion.div>
        <div className="w-full flex justify-end">
          <ProcessButton onClick={handleNextClick} label="Next" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JoinForm;
