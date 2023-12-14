import React, { useState } from 'react';
import Input from './Input';
import momo from '../../public/momo.svg';
import cart from '../../public/card.svg';
import kkiapye from '../../public/kkiapay.svg';
import visa from '../../public/cartvisa.svg';
import flag from '../../public/flag.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  onNext: () => void;
};

const Paiementform = ({ onNext }: Props) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [activeButton, setActiveButton] = useState<number>(1);
  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
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
        className="h-fit w-[570px] rounded-lg bg-[#1A1A1A] border border-black shadow-xl m-5 lg:mx-0"
      >
        <div className="h-[100px] bg-[#222222] rounded-lg flex justify-center items-center">
          <span className="text-3xl font-semibold text-white">Join us</span>
        </div>
        <div className="p-8 flex flex-col space-y-8 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
            className="w-full h-[80px] flex space-x-2"
          >
            <button
              className={`w-1/2 h-full ${
                activeButton === 1
                  ? 'bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary'
                  : 'bg-gray-500'
              } rounded-lg p-px flex justify-center items-center`}
              onClick={() => handleButtonClick(1)}
            >
              <div className="flex h-[98%] flex-col justify-center items-start p-5 space-y-2 rounded-lg bg-white dark:bg-black w-[99%]">
                <Image
                  src={momo}
                  alt="MTN Mobile Money logo"
                  width={16}
                  height={25}
                />
                <span className="text-white font-semibold">Mobile Money</span>
              </div>
            </button>
            <button
              className={`w-1/2 h-full ${
                activeButton === 2
                  ? 'bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary'
                  : 'bg-gray-500'
              } rounded-lg p-px flex justify-center items-center`}
              onClick={() => handleButtonClick(2)}
            >
              <div className="flex h-[98%] flex-col justify-center items-start p-5 space-y-2 rounded-lg bg-white dark:bg-black w-[99%]">
                <Image src={cart} alt="Bank cart logo" width={25} height={25} />
                <span className="text-white font-semibold">card</span>
              </div>
            </button>
          </motion.div>

          {activeButton === 1 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
                  Fullname *
                </span>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
                  Mobile number *
                </span>
                <span className="text-white w-fit  flex justify-start items-center px-3">
                  <Image
                    src={flag}
                    alt="Visa cart logo"
                    height={15}
                    width={25}
                  />
                </span>
                <Input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="96000000"
                />
              </motion.div>
            </>
          )}

          {activeButton === 2 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
                  Card number *
                </span>
                <Image
                  src={visa}
                  alt="Visa cart logo"
                  height={15}
                  width={110}
                  className="absolute right-2 bottom-[27px]"
                />
                <Input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
                  CVV *
                </span>
                <Input type="text" name="cvv" id="cvv" placeholder="123" />
              </motion.div>
            </>
          )}

          <div className="w-full h-fit flex justify-end items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
              className="w-[250px] h-[60px] relative"
            >
              <button
                className="w-full h-full bg-white rounded-lg font-semibold"
                onClick={handleNextClick}
              >
                Pay 125 340 XOF
              </button>
              <Image
                src={kkiapye}
                alt="Kkiapay logo"
                height={15}
                width={110}
                className="absolute right-0 bottom-0"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Paiementform;
