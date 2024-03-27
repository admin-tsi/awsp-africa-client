import React, { useEffect, useState } from 'react';
import Input from './Input';
import Momo from '../../public/momo.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type PaymentStep3 = {
  payment_Methode: string;
};

type PaymentFormProps = PaymentStep3 & {
  updateFields: (fields: Partial<PaymentStep3>) => void;
  isPaymentSelected: boolean;
  isCheckboxChecked: boolean;
  setIsPaymentSelected: (value: boolean) => void;
  setIsCheckboxChecked: (value: boolean) => void;
};

const PaymentForm = ({
  payment_Methode,
  updateFields,
  isPaymentSelected,
  isCheckboxChecked,
  setIsPaymentSelected,
  setIsCheckboxChecked,
}: PaymentFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [activeButton, setActiveButton] = useState<number>();
  const [payment, setPayment] = useState<any>({});
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const handleButtonClick = (buttonIndex: number, paymentName: any) => {
    setActiveButton(buttonIndex);
    setSelectedPayment(paymentName.name);
    updateFields({ payment_Methode: paymentName });
  };

  const getPaymentMethod = async () => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payment_methods`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch payment methods');
      }

      const data = await response.json();
      setPayment(data);
    } catch (error) {
      console.error('Error fetching payment method:', error);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  useEffect(() => {
    getPaymentMethod();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={`p-8 flex flex-col space-y-5 ${
          selectedPayment
            ? `bg-gradient-to-r from-${selectedPayment.toLowerCase()} to-primary dark:from-${selectedPayment.toLowerCase()} dark:to-primary`
            : ''
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-3 lg:flex-row lg:space-y-0 lg:space-x-2 h-fit">
          {Object.values(payment).map((method: any, index: number) => (
            <button
              key={index}
              type="button"
              className={`w-full flex justify-center items-center h-full ${
                activeButton === index
                  ? `bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary`
                  : 'bg-black'
              } rounded-lg p-px flex justify-center items-center`}
              onClick={() => handleButtonClick(index, method)}
            >
              <div className="flex h-[98%] flex-col justify-center items-start p-5 space-y-2 rounded-lg bg-black dark:bg-black w-[99%]">
                <Image
                  src={Momo}
                  alt="MTN Mobile Money logo"
                  width={16}
                  height={25}
                  className="max-md:hidden"
                />
                <span className="font-semibold text-white">{method.name}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="w-[550px]">
          <span className="text-primary">Notice:</span>
          <p className="text-white">
            To finalize the process, please remain on the payment page. You will
            be automatically redirected to the final page shortly.
          </p>
        </div>
        <div className="flex w-full space-x-2 text-white group">
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <span className="cursor-pointer">
            I acknowledge and agree to the{' '}
            <span className="group-hover:underline">
              General Conditions of Sale and Use
            </span>
            .
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PaymentForm;
