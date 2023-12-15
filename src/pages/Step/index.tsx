/* eslint-disable */
/* eslint-disable */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import User_register_step1 from '@/components/UserRegisterStep1';
import User_register_step2 from '@/components/UserRegisterStep2';
import User_register_step3 from '@/components/UserRegisterStep3';
import { useMultistepForm } from '@/config/useMultistepForm';
import { FormEvent, useState } from 'react';

export default function Index() {
  type FormData = {
    firstName: string;
    lastName: string;
    phone_Number: number | null;
    birth: string;
    city: string;
    locality: string;
    state: string;
    sport: string;
    gender: string;
    degree: string;
    profession: string;
    communication: string;
    passion: string;
  };

  const InitialData: FormData = {
    firstName: '',
    lastName: '',
    phone_Number: null,
    gender: '',
    locality: '',
    birth: '',
    city: '',
    state: '',
    sport: '',
    degree: '',
    profession: '',
    communication: '',
    passion: '',
  };

  const [data, setData] = useState(InitialData);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <User_register_step1 {...data} updateFields={updateFields} />,
      <User_register_step2 {...data} updateFields={updateFields} />,
      <User_register_step3 {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log('Final Data:', data);
    alert('Successful Account Creation');
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
                {' '}
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
                  {isLastStep ? 'Finish' : 'Next'}
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
