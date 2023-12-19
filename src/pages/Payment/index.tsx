/* eslint-disable */
import React, { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';
import JoinForm from '@/components/JoinForm';
import PaymentForm from '@/components/PaymentForm';
import EndPaymentForm from '@/components/EndPaymentForm';
import Footer from '@/components/Footer';
import { usePaymentForm } from '@/config/usePaymentForm';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Kkiapye from '../../../public/kkiapay.svg';

export default function Index() {
  type FormData = {
    Email: string;
    FullName: string;
    Phone_Number: string;
    Cart_Number: string;
    Cvv: string;
    isSuccess: boolean;
  };

  const initialData: FormData = {
    Email: '',
    FullName: '',
    Phone_Number: '',
    Cart_Number: '',
    Cvv: '',
    isSuccess: false,
  };

  let easing = [0.6, -0.05, 0.01, 0.99];
  const [data, setData] = useState<FormData>(initialData);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    isEnd,
    back,
    next,
  } = usePaymentForm([
    <JoinForm {...data} updateFields={updateFields} />,
    <PaymentForm {...data} updateFields={updateFields} />,
    <EndPaymentForm isSuccess={data.isSuccess} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    setData((prev) => ({ ...prev, isSuccess: true }));

    console.log('Final Data:', data);
    setTimeout(() => {
      next();
    }, 1000);
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-neutral">
        <div className="h-fit w-[570px] rounded-lg bg-neutral border border-black shadow-xl m-5 lg:mx-0">
          <form onSubmit={onSubmit}>
            <div className="h-[80px] bg-[#222222] rounded-lg flex justify-start items-center p-5">
              <span className="text-xl font-semibold text-white">
                Step {currentStepIndex + 1} of {steps.length}
              </span>
            </div>
            {step}
            {!isEnd && (
              <div className="w-full flex justify-end items-center p-5">
                <div className="flex space-x-2">
                  {!isFirstStep && !isLastStep ? (
                    <button
                      onClick={back}
                      type="button"
                      className="w-[80px] h-[37px] bg-white rounded-md font-[300] hover:font-semibold"
                    >
                      Back
                    </button>
                  ) : null}
                  {isLastStep ? (
                    <div className="w-full h-fit flex justify-end items-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
                        className="w-[250px] h-[60px] relative"
                      >
                        <button
                          type="submit"
                          className="w-full h-full bg-white rounded-lg font-semibold"
                        >
                          Pay 125 340 XOF
                        </button>
                        <Image
                          src={Kkiapye}
                          alt="Kkiapay logo"
                          height={15}
                          width={110}
                          className="absolute right-0 bottom-0"
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <button
                      className="w-[80px] h-[37px] bg-white rounded-md font-[300] hover:font-semibold"
                      type="submit"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
