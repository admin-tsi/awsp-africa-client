import React, { useEffect, useState } from 'react';
import Input from './Input';
import Momo from '../../public/momo.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type PaymentStep2 = {
  payment_Methode: string;
};

type PaymentFormProps = PaymentStep2 & {
  updateFields: (fields: Partial<PaymentStep2>) => void;
};

const PaymentForm = ({ payment_Methode, updateFields }: PaymentFormProps) => {
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
      //console.log('Payment methods:', data);
    } catch (error) {
      console.error('Error fetching payment method:', error);
    }
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
        className={`p-8 flex flex-col space-y-8 ${
          selectedPayment ? `bg-gradient-to-r from-${selectedPayment.toLowerCase()} to-primary dark:from-${selectedPayment.toLowerCase()} dark:to-primary` : ''
        }`}
      >
        <div className="w-full lg:flex-row lg:space-y-0 lg:space-x-2 h-fit flex flex-col space-y-3 justify-center items-center">
          {Object.values(payment).map((method: any, index: number) => (
            <button
              key={index}
              type="button"
              className={`w-full flex justify-center items-center h-full ${
                activeButton === index
                  ? `bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary`
                  : 'bg-gray-500'
              } rounded-lg p-px flex justify-center items-center`}
              onClick={() => handleButtonClick(index, method)}
            >
              <div className="flex h-[98%] flex-col justify-center items-start p-5 space-y-2 rounded-lg bg-white dark:bg-black w-[99%]">
                <Image
                  src={Momo}
                  alt="MTN Mobile Money logo"
                  width={16}
                  height={25}
                  className="max-md:hidden"
                />
                <span className="text-white font-semibold">{method.name}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};


export default PaymentForm;
