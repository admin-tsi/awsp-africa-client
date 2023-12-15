import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import End from '../../public/validate.svg';
import Failed from '../../public/Failled.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  isSuccess: boolean;
};

const EndPaymentForm = ({ isSuccess }: Props) => {
  const [confetti, setConfetti] = useState(false);
  let easing = [0.6, -0.05, 0.01, 0.99];

  useEffect(() => {
    const confettiTimeout = setTimeout(() => {
      setConfetti(true);
    }, 1000);

    return () => clearTimeout(confettiTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="h-fit w-full md:w-2/3 lg:w-fit rounded-lg bg-neutral border border-black shadow-xl m-5 lg:mx-0"
    >
      <div className="h-[100px] bg-neutral3 rounded-lg flex justify-center items-center">
        <span className="text-2xl lg:text-3xl font-semibold text-white">
          {isSuccess ? 'Thanks !!!' : 'Oops !!!'}
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
        className="p-5 flex flex-col justify-center items-center space-y-3 md:space-y-2 lg:space-y-6 "
      >
        {isSuccess ? (
          <Image src={End} alt="Validation Logo" className='w-1/2 h-1/2 md:w-1/3 md:h-1/3 lg:w-2/4 lg:h-2/4' />
        ) : (
          <>
            <Image src={Failed} alt="Failed Logo" className='w-1/2 h-1/2 md:w-1/3 md:h-1/3 lg:w-2/4 lg:h-2/4' />
          </>
        )}
        <div className="w-full flex flex-col justify-center items-center space-y-1">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
            className="text-white text-2xl lg:text-3xl font-semibold"
          >
            {isSuccess ? 'Payment Successful' : 'Payment Failed'}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
            className="text-white text-xl lg:text-1xl text-center"
          >
            {isSuccess
              ? 'Check your mail to continue'
              : 'Check your payment details and try again.'}
          </motion.span>
        </div>
      </motion.div>
      {confetti && isSuccess && <Confetti />}
    </motion.div>
  );
};

export default EndPaymentForm;
