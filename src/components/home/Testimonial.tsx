import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  title: string;
  testimonial: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  testimonial,
  imageSrc,
}) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center relative">
      <Image
        src={imageSrc}
        alt={name}
        width={100}
        height={100}
        className="rounded-full  absolute -translate-y-1/2 -translate-x-1/2 top-0 left-1/2"
      />
      <div className="mt-8">
        <p className="text-lg font-light text-gray-600">{testimonial}</p>
        <div className="mt-4">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-lg font-semibold text-black">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
