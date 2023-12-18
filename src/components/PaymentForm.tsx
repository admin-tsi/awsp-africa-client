import React, { useState } from 'react';
import Input from './Input';
import Momo from '../../public/momo.svg';
import Cart from '../../public/card.svg';
import Kkiapye from '../../public/kkiapay.svg';
import Visa from '../../public/cartvisa.svg';
import Flag from '../../public/flag.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type PaymentStep2 = {
  FullName: string;
  Phone_Number: string;
  Cart_Number: string;
  Cvv: string;
};

type PaymentFormProps = PaymentStep2 & {
  updateFields: (fields: Partial<PaymentStep2>) => void;
};

const PaymentForm = ({
  FullName,
  Phone_Number,
  Cart_Number,
  Cvv,
  updateFields,
}: PaymentFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [activeButton, setActiveButton] = useState<number>(1);
  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className="p-8 flex flex-col space-y-8 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
            className="w-full h-[50px] md:h-[80px] flex space-x-2"
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
                  src={Momo}
                  alt="MTN Mobile Money logo"
                  width={16}
                  height={25}
                  className="max-md:hidden"
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
                <Image
                  src={Cart}
                  alt="Bank cart logo"
                  width={25}
                  height={25}
                  className="max-md:hidden"
                />
                <span className="text-white font-semibold">Card</span>
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
                <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[30%] font-semibold flex justify-start items-center px-3">
                  Fullname *
                </span>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="John Doe"
                  value={FullName}
                  className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                  onChange={(e) => updateFields({ FullName: e.target.value })}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[30%] font-semibold flex justify-start items-center px-3">
                  Mobile number *
                </span>
                <span className="text-white w-fit  flex justify-start items-center px-3">
                  <Image
                    src={Flag}
                    alt="Visa cart logo"
                    height={15}
                    width={25}
                  />
                </span>
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="96000000"
                  value={Phone_Number}
                  className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                  onChange={(e) =>
                    updateFields({ Phone_Number: e.target.value })
                  }
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
                <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[30%] font-semibold flex justify-start items-center px-3">
                  Card number *
                </span>
                <Image
                  src={Visa}
                  alt="Visa cart logo"
                  height={15}
                  width={110}
                  className="absolute right-2 bottom-[27px]"
                />
                <input
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                  onChange={(e) =>
                    updateFields({ Cart_Number: e.target.value })
                  }
                  required
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
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="123"
                  className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                  onChange={(e) => updateFields({ Cvv: e.target.value })}
                  required
                />
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PaymentForm;
