import React from 'react';

interface JobItemProps {
  number: string;
  title: string;
  description: string;
}

const JobItem: React.FC<JobItemProps> = ({ number, title, description }) => {
  return (
    <div className="border-b relative group overflow-hidden">
      <div className="transition ease-in-out delay-150 duration-300 bg-gradient-to-r from-secondary to-primary absolute h-full w-full -z-10 group-hover:translate-y-0 translate-y-48"></div>
      <div className="flex justify-between items-end py-8">
        <div className="flex items-end flex-1">
          <h1 className="transition ease-in-out delay-150 duration-300 text-3xl md:text-5xl font-medium group-hover:translate-x-12">
            {number}
          </h1>
          <h1 className="text-2xl md:text-4xl font-light ml-24">{title}</h1>
        </div>
        <div className="w-1/3">
          <h1 className="text-sm font-light hidden sm:block">{description}</h1>
        </div>
      </div>
    </div>
  );
};
export default JobItem;
