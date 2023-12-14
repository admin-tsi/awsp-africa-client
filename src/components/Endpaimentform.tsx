import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import end from '../../public/validate.svg';
import failled from '../../public/Failled.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  isSuccess: boolean;
};

const Endpaimentform = ({ isSuccess }: Props) => {
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
      className="h-fit w-[558px] rounded-lg bg-[#1A1A1A] border border-black shadow-xl m-5 lg:mx-0"
    >
      <div className="h-[100px] bg-[#222222] rounded-lg flex justify-center items-center">
        <span className="text-3xl font-semibold text-white">
          {isSuccess ? 'Thanks !!!' : 'Oops !!!'}
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
        className="p-8 flex flex-col justify-center items-center space-y-6 "
      >
        {isSuccess ? (
          <Image src={end} alt="Validation Logo" />
        ) : (
          <>
            <Image src={failled} alt="Failed Logo" />
          </>
        )}
        <div className="w-full flex flex-col justify-center items-center space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
            className="text-white text-3xl font-semibold"
          >
            {isSuccess ? 'Payment Successful' : 'Payment Failed'}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
            className="text-white text-2xl text-center"
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

export default Endpaimentform;
