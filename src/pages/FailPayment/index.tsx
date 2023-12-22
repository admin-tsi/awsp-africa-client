import EndPaymentForm from '@/components/EndPaymentForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';

type Props = {};

function index({}: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto flex flex-col justify-center items-center p-5 bg-neutral">
        <div className="h-fit w-[570px] rounded-lg bg-neutral border border-black shadow-xl m-5 lg:mx-0">
          <span className="h-[100px] bg-[#222222] rounded-lg flex justify-center items-center text-white text-2xl font-semibold">Thanks !!! </span>
          <EndPaymentForm isSuccess={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
