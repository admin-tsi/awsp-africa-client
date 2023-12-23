/* eslint-disable */
import { FormEvent, useContext, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import UserRegisterStep1 from '@/components/UserRegisterStep1';
import UserRegisterStep2 from '@/components/UserRegisterStep2';
import UserRegisterStep3 from '@/components/UserRegisterStep3';
import { useMultistepForm } from '@/config/useMultistepForm';
import { UserContext } from '@/context/user-context';
import Router, { useRouter } from 'next/router';

export default function Index() {
  const { user, token } = useContext(UserContext);
  const router = useRouter();

  type FormData = {
    firstName: string;
    lastName: string;
    phone_Number: number | null;
    birth: string;
    city: string;
    locality: string;
    state: string;
    sport: string[];
    sex: string;
    education: string;
    profession: string;
    communication: string;
    passion: string[];
    awsp_country: string;
    nationality: string;
  };

  const InitialData: FormData = {
    firstName: '',
    lastName: '',
    phone_Number: null,
    sex: '',
    locality: '',
    birth: '',
    city: '',
    state: '',
    sport: [],
    education: '',
    profession: '',
    communication: '',
    passion: [],
    awsp_country: 'Benin',
    nationality: '',
  };

  const [data, setData] = useState(InitialData);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserRegisterStep1 {...data} updateFields={updateFields} />,
      <UserRegisterStep2 {...data} updateFields={updateFields} />,
      <UserRegisterStep3 {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log('Final Data:', data);
    await handleUserData(data);
  };

  const handleUserData = async (userData: FormData) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/data/${user?._id}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        console.log(token);
        console.log(userData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      router.push('/Course');
      console.log(responseData);

      return response;
    } catch (error) {
      console.error('Error handling user data:', error);
      throw error;
    }
  };

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
