/* eslint-disable */
import { Check } from '@/utils/svgs';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type PaymentStep2 = {
  type_compte: string;
};

type PaymentFormProps = PaymentStep2 & {
  updateFields: (fields: Partial<PaymentStep2>) => void;
};

const Plan = ({ type_compte, updateFields }: PaymentFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [activeButton, setActiveButton] = useState<string>();
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const planParams = useSearchParams();
  const plann = planParams.get('plan');

  console.log(plann);

  const handleButtonClick = (plan: any) => {
    setActiveButton(plan);
    setSelectedPayment(plan);
    updateFields({ type_compte: plan });
  };

  useEffect(() => {
    if (plann) {
      setActiveButton(plann);
      handleButtonClick(plann);
    } else {
      setActiveButton(type_compte);
    }
  }, []);

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
        <div className="flex flex-col items-center justify-center space-y-3 w-fit lg:flex-row lg:space-y-0 lg:space-x-2 h-fit">
          <button
            type="button"
            className={`w-[400px] flex justify-center items-center h-80 ${
              activeButton === 'standard'
                ? `bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary`
                : 'bg-black'
            } rounded-lg p-px flex justify-center items-center`}
            onClick={() => handleButtonClick('standard')}
          >
            <div className="flex h-[98%] flex-col  items-start p-5 space-y-4 rounded-lg bg-black dark:bg-black w-[99%]">
              <span className="text-white">MEMBER</span>
              <span className="text-4xl font-bold text-white">$49.99</span>

              <ul className="flex flex-col mt-8 mb-6 space-y-2 text-white list-inside decoration-0">
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">
                    Prerequisite course (anatomy and physiology)
                  </li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">Member intro videos and content</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">Workshops access</li>
                </div>
              </ul>
            </div>
          </button>
          <button
            type="button"
            className={`w-[400px] flex justify-center items-center h-80 ${
              activeButton === 'expert'
                ? `bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary`
                : 'bg-black'
            } rounded-lg p-px flex justify-center items-center`}
            onClick={() => handleButtonClick('expert')}
          >
            <div className="flex h-[98%] flex-col  items-start p-5 space-y-4 rounded-lg bg-black dark:bg-black w-[99%]">
              <span className="text-white">MEMBER + CERTIF</span>
              <span className="text-4xl font-bold text-white">$359.99</span>
              <ul className="flex flex-col mt-8 mb-6 space-y-2 text-white list-inside decoration-0">
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">
                    Intro videos and content plus prerequisite content
                  </li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">
                    CEU videos, virtual clinics, and content
                  </li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">Prerequisite course</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">AWSP performance journals</li>
                </div>
                <div className="flex items-center">
                  <Check />
                  <li className="text-left">Workshops access</li>
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
