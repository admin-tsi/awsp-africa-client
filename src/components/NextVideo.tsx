import React from 'react';

type Props = {};

const NextVideo = (props: Props) => {
  return (
    <div className="h-30 w-full bg-black flex hover:bg-neutral3 cursor-pointer duration-200 ease-in-out">
      <div className="w-1/3 h-full p-2">
        <video className="w-full h-full object-cover">
          <source src="home/a.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-2/3 p-1 text-white">
        <span>Total Transformation: Persoccnal Coaching Program</span>
        <div className='w-full flex justify-end items-center'>
            <span className='text-gray-400 text-sm'>40:40 min</span>
        </div>
      </div>
    </div>
  );
};

export default NextVideo;
