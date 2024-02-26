/* eslint-disable */
import React, { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';
import JoinForm from '@/components/JoinForm';
import Footer from '@/components/Footer';
import { usePaymentForm } from '@/config/usePaymentForm';
import dynamic from 'next/dynamic';

const PaymentForm = dynamic(
  () => import('@/components/PaymentMethode'),
  { ssr: false }
);

export default function Index() {
  type FormData = {
    email: string;
    payment_Methode: any;
  };

  const initialData: FormData = {
    email: '',
    payment_Methode: '',
  };

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
    back,
    next,
  } = usePaymentForm([
    <JoinForm {...data} updateFields={updateFields} />,
    <PaymentForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }
    if (typeof window !== 'undefined') {
      window.location.href = 'https://direct.kkiapay.me/2657/awsp-certification';

/*
      payments(data.email, data.payment_Methode)
*/
    }
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
            <div className="w-full flex justify-end items-center p-5">
              <div className="flex space-x-2">
                {!isFirstStep && (
                  <button
                    onClick={back}
                    type="button"
                    className="w-[80px] h-[37px] bg-white rounded-md font-[300] hover:font-semibold"
                  >
                    Back
                  </button>
                )}
                <button
                  className="w-[80px] h-[37px] bg-white rounded-md font-[300] hover:font-semibold"
                  type="submit"
                >
                  {isLastStep ? 'Pay' : 'Next'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
