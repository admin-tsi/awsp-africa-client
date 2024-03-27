/* eslint-disable */
import React, { FormEvent, useState } from 'react';
import JoinForm from '@/components/JoinForm';
import { usePaymentForm } from '@/config/usePaymentForm';
import dynamic from 'next/dynamic';
import { payments } from '@/Api/Payments/payments.controller';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Plan from '@/components/Subscription';
import { useSearchParams } from 'next/navigation';

const PaymentForm = dynamic(() => import('@/components/PaymentMethode'), {
  ssr: false,
});

export default function Index() {
  type FormData = {
    email: string;
    payment_Methode: any;
    type_compte: string;
  };

  const initialData: FormData = {
    email: '',
    payment_Methode: '',
    type_compte: '',
  };

  const [emailError, setEmailError] = useState<string>('');

  const [data, setData] = useState<FormData>(initialData);
  const [isPaymentSelected, setIsPaymentSelected] = useState<boolean>(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    usePaymentForm([
      <JoinForm
        {...data}
        updateFields={updateFields}
        emailError={emailError}
      />,
      <Plan {...data} updateFields={updateFields} />,
      <PaymentForm
        {...data}
        updateFields={updateFields}
        isPaymentSelected={isPaymentSelected}
        isCheckboxChecked={isCheckboxChecked}
        setIsPaymentSelected={setIsPaymentSelected}
        setIsCheckboxChecked={setIsCheckboxChecked}
      />,
    ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) {
      if (isFirstStep) {
        if (data.email.trim() !== '') {
          try {
            const url = process.env.NEXT_PUBLIC_API_URL;
            const response = await fetch(`${url}/api/v1/auth/verify-email`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: data.email }),
            });
            if (response.status === 200) {
              setEmailError(
                'This email already exists. Please use a different email.'
              );
              return;
            } else if (response.status === 404) {
              setEmailError('');
              return next();
            } else {
              setEmailError(
                'An error occurred while checking the email. Please try again later.'
              );
              return;
            }
          } catch (error) {
            setEmailError(
              'An error occurred while checking the email. Please try again later.'
            );
            return;
          }
        }
      }
      return next();
    }

    if (typeof window !== 'undefined') {
      console.log(data);

      // window.location.href = 'https://direct.kkiapay.me/2657/bra';
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex items-center justify-center flex-1 bg-neutral">
        <div className="h-fit min-w-[570px] rounded-lg bg-neutral border border-black shadow-xl m-5 lg:mx-0">
          <form onSubmit={onSubmit}>
            <div className="h-[80px] bg-[#222222] rounded-lg flex justify-start items-center p-5">
              <span className="text-xl font-semibold text-white">
                Step {currentStepIndex + 1} of {steps.length}
              </span>
            </div>
            {step}
            <div className="flex items-center justify-end w-full p-5">
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
                {isLastStep ? (
                  <button
                    className="w-[80px] h-[37px] bg-white rounded-md font-[300] hover:font-semibold"
                    disabled={!isCheckboxChecked}
                    type="submit"
                  >
                    Pay
                  </button>
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
