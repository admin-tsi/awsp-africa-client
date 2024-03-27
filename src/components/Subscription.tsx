import React, { useEffect, useState } from 'react';
import Input from './Input';
import Momo from '../../public/momo.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from '@/utils/svgs';

type PaymentStep2 = {
  type_compte: string;
};

type PaymentFormProps = PaymentStep2 & {
  updateFields: (fields: Partial<PaymentStep2>) => void;
};

const Plan = ({ type_compte, updateFields }: PaymentFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [activeButton, setActiveButton] = useState<number>();
  const [payment, setPayment] = useState<any>({});
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const handleButtonClick = (buttonIndex: number, plan: any) => {
    setActiveButton(buttonIndex);
    setSelectedPayment(plan);
    updateFields({ type_compte: plan });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={`p-8 flex flex-col space-y-8 ${
          selectedPayment
            ? `bg-gradient-to-r from-${selectedPayment.toLowerCase()} to-primary dark:from-${selectedPayment.toLowerCase()} dark:to-primary`
            : ''
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-3 lg:flex-row lg:space-y-0 lg:space-x-2 h-fit">
          <button
            type="button"
            className={`w-[200px] flex justify-center items-center h-96 ${
              activeButton === 0
                ? `bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary`
                : 'bg-black'
            } rounded-lg p-px flex justify-center items-center`}
            onClick={() => handleButtonClick(0, 'standard')}
          >
            <div className="flex h-[98%] flex-col justify-center items-start p-5 space-y-2 rounded-lg bg-black dark:bg-black w-[99%]">
              <div className="flex items-center space-x-1">
                <span className="text-white">MEMBER</span>
                <span className="text-white">($49.99)</span>
              </div>

              <ul className="mt-8 mb-6 text-white list-inside decoration-0">
                <div className="flex items-center">
                  <Check />
                  <li>Prerequisite course (anatomy and physiology)</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li>Member intro videos and content</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li>Workshops access</li>
                </div>
              </ul>
            </div>
          </button>
          <button
            type="button"
            className={`w-[200px] flex justify-center items-center h-96 ${
              activeButton === 1
                ? `bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary`
                : 'bg-black'
            } rounded-lg p-px flex justify-center items-center`}
            onClick={() => handleButtonClick(1, 'expert')}
          >
            <div className="flex h-[98%] flex-col justify-center items-start p-5 space-y-2 rounded-lg bg-black dark:bg-black w-[99%]">
              <div className="flex items-center space-x-1">
                <span className="text-white">MEMBER + CERTIF</span>
                <span className="text-white">($359.99)</span>
              </div>
              <ul className="mt-8 mb-6 text-white list-inside decoration-0">
                <div className="flex items-center">
                  <Check />
                  <li>Intro videos and content plus prerequisite content</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li>CEU videos, virtual clinics, and content</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li>Prerequisite course</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li>AWSP performance journals</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li>Workshops access</li>
                </div>
              </ul>
            </div>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Plan;
