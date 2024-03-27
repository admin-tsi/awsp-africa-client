import React from 'react';
import Input from './Input';
import ProcessButton from './ProcessButton';
import { AnimatePresence, motion } from 'framer-motion';

type PaymentStep1 = {
  email: string;
  emailError: string;
};

type PaymentFormProps = PaymentStep1 & {
  updateFields: (fields: Partial<PaymentStep1>) => void;
};
const JoinForm = ({ email, updateFields, emailError }: PaymentFormProps) => {
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
          className="flex items-center w-full p-3 bg-black rounded-lg"
        >
          <span className="flex items-center justify-center p-3 text-white whitespace-nowrap">
            Email *
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            className="flex items-center justify-center w-full px-2 text-white bg-black rounded-lg shadow-md outline-none h-14"
            onChange={(e) => updateFields({ email: e.target.value })}
            required
          />
        </motion.div>
        {emailError && <p className="pl-1 my-2 text-red-500">{emailError}</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default JoinForm;
