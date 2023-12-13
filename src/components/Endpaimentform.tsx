import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import end from '../../public/validate.svg';
import Image from 'next/image';

type Props = {};

const Endpaimentform = (props: Props) => {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const confettiTimeout = setTimeout(() => {
      setConfetti(true);
    }, 1000);

    return () => clearTimeout(confettiTimeout);
  }, []);

  return (
    <section className="h-fit w-[558px] rounded-lg bg-[#1A1A1A] border border-black shadow-xl m-5 lg:mx-0">
      <div className="h-[100px] bg-[#222222] rounded-lg flex justify-center items-center">
        <span className="text-3xl font-semibold text-white">Thanks !!!</span>
      </div>
      <div className="p-8 flex flex-col justify-center items-center space-y-6 ">
        <Image src={end} alt="Validation Logo" />
        <div className='w-full flex flex-col justify-center items-center space-y-3'>
          <span className="text-white text-3xl font-semibold">
            Payment Successful
          </span>
          <span className="text-white text-3xl">Check your mail to continue</span>
        </div>
      </div>
      {confetti && <Confetti />}
    </section>
  );
};

export default Endpaimentform;
