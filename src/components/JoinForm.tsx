import React from 'react';
import Input from './Input';
import ProcessButton from './ProcessButton';
import { AnimatePresence, motion } from 'framer-motion';

type PaymentStep1 = {
  email: string;
};

type PaymentFormProps = PaymentStep1 & {
  updateFields: (fields: Partial<PaymentStep1>) => void;
};
const JoinForm = ({ email, updateFields }: PaymentFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="p-5 "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
          className="w-full bg-black rounded-lg flex items-center p-3"
        >
          <span className="text-white flex justify-center items-center whitespace-nowrap p-3">
            Email *
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={(e) => updateFields({ email: e.target.value })}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
        >
          <div className="flex w-full items-center justify-start">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default JoinForm;
