import { FC } from 'react';
import Map from '@/components/Map';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: FC = () => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <div className="container mx-auto flex flex-col p-5 bg-neutral">
      <span className="text-white text-2xl md:text-4xl font-semibold">
        Focal points
      </span>
      <p className="text-white leading-5 my-5">
        Explore our designated Focal Points on this page, exclusively tailored
        for members of our program seeking optimal training environments.
      </p>
      <Map />
    </div>
    <Footer />
  </div>
);

export default Index;
