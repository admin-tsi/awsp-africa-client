import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Joinform from '@/components/Joinform';
import Paiementform from '@/components/Paiementform';
import Endpaimentform from '@/components/Endpaimentform';
import Footer from '@/components/Footer';

export default function Index() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePaymentSuccess = () => {
    setIsSuccess(false);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-neutral">
        {currentStep === 1 && <Joinform onNext={handleNext} />}
        {currentStep === 2 && <Paiementform onNext={handlePaymentSuccess} />}
        {currentStep === 3 && <Endpaimentform isSuccess={isSuccess} />}
      </div>
      <Footer />
    </div>
  );
}
