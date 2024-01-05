import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NextVideo from '@/components/NextVideo';
import VideoContainer from '@/components/VideoContainer';
import React from 'react';

type Props = {};

const index = (props: Props) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-fit">
        
        <div className="container mx-auto flex flex-col p-5 lg:flex-row lg:space-x-6 max-lg:space-y-4">
          <div className="w-full h-fit lg:h-96 lg:w-2/3 rounded-lg">
            <VideoContainer />
          </div>
          <div className="h-96 lg:w-1/3 rounded-lg">
            <div className="p-5 bg-black w-full rounded-t-lg">
              <span className="text-white">Comming Soon</span>
            </div>
            <div className="flex-1 h-[325px] p-2 flex flex-col space-y-2 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-800 bg-neutral2">
              <NextVideo />
              <NextVideo />
              <NextVideo />
              <NextVideo />
              <NextVideo />
              <NextVideo />
            </div>
          </div>
        </div>
        <div className="container mx-auto p-5">
          <span className="text-white text-2xl lg:text-3xl">
            Total Transformation: Persoccnal Coaching Program
          </span>

          <p className="p-1 text-white my-3">
            Embark on a life-altering journey with our &apos;Total
            Transformation: Personal Coaching Program.&apos; This comprehensive
            program is meticulously designed to guide you through a profound and
            holistic metamorphosis, empowering you to unlock your full potential
            and achieve enduring personal growth. Through a carefully curated
            series of coaching sessions, tailored exercises, and insightful
            guidance, you will navigate the intricate layers of self-discovery,
            resilience-building, and goal attainment. Our experienced coaches
            are committed to supporting you at every step, fostering positive
            habits, and instilling a mindset that propels you towards lasting
            transformation. Embrace this transformative experience and embark on
            the path to becoming the best version of yourself, realizing a life
            of purpose, fulfillment, and success.
          </p>
          <h2 className="text-2xl text-white">Sommaire</h2>
          <ul className="p-3 text-white">
            <li className="my-3 text-1xl">I- Introduction</li>
            <li className="my-3 text-1xl">II- Self-Discovery Journey</li>
            <li className="my-3 text-1xl">III- Mindset Mastery</li>
            <li className="my-3 text-1xl">IV- Resilience Building</li>
            <li className="my-3 text-1xl">V- Goal Setting and Planning</li>
            <li className="my-3 text-1xl">VI- Conclusion</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
