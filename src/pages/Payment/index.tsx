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
import { openingKKkiaWidget } from '@/Api/kkiapay.service';

export default function Index() {
  type FormData = {
    email: string;
    fullName: string;
    phone_Number: string;
    cart_Number: string;
    cvv: string;
    isSuccess: boolean;
  };

  const initialData: FormData = {
    email: '',
    fullName: '',
    phone_Number: '',
    cart_Number: '',
    cvv: '',
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
    <PaymentForm {...data} updateFields={updateFields} />
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    setData((prev) => ({ ...prev, isSuccess: true }));

    openingKKkiaWidget(data.email)    
    
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
            <div className='w-full flex justify-end item-center p-5'>
              <button
                className="w-[80px] h-[37px] bg-white rounded-md font-[300] hover:font-semibold"
                type="submit"
              >
                Next
              </button>

            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
