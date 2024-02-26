import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const students = [
  {
    name: 'Alice Johnson',
    achievement: 'Achieved Level 3 in Strength Training Certification',
    image: '/home/gym.png',
  },
  {
    name: 'Bob Smith',
    achievement: 'Improved Personal Best in Powerlifting by 20%',
    image: '/home/gym.png',
  },
  {
    name: 'Charlie Brown',
    achievement: 'Completed Advanced Performance Enhancement Program',
    image: '/home/gym.png',
  },
  {
    name: 'Diana Prince',
    achievement: 'Achieved Level 3 in Strength Training Certification',
    image: '/home/gym.png',
  },
  {
    name: 'Eve Jackson',
    achievement: 'Improved Personal Best in Powerlifting by 20%',
    image: '/home/gym.png',
  },
  {
    name: 'Frank Ocean',
    achievement: 'Completed Advanced Performance Enhancement Program',
    image: '/home/gym.png',
  },
  {
    name: 'Alice Johnson',
    achievement: 'Achieved Level 3 in Strength Training Certification',
    image: '/home/gym.png',
  },
  {
    name: 'Bob Smith',
    achievement: 'Improved Personal Best in Powerlifting by 20%',
    image: '/home/gym.png',
  },
  {
    name: 'Charlie Brown',
    achievement: 'Completed Advanced Performance Enhancement Program',
    image: '/home/gym.png',
  },
  {
    name: 'Diana Prince',
    achievement: 'Achieved Level 3 in Strength Training Certification',
    image: '/home/gym.png',
  },
  {
    name: 'Eve Jackson',
    achievement: 'Improved Personal Best in Powerlifting by 20%',
    image: '/home/gym.png',
  },
  {
    name: 'Frank Ocean',
    achievement: 'Completed Advanced Performance Enhancement Program',
    image: '/home/gym.png',
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.95,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  },
};
export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto bg-neutral p-3">
        <div className="w-full flex flex-col justify-center items-center my-8">
          <h3 className="text-3xl lg:text-5xl text-white">
            Students Highlights
          </h3>
          <h4 className="text-2xl text-primary pt-2">Wall of Fame</h4>
          <h6 className="text-xl text-white text-center pt-2">
            <span className="text-primary ">406 Students</span> have joined the
            certification already! Here`&apos;`s a collection of what they did.
          </h6>
        </div>

        {/* Student Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-4"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-48 object-cover"
              />
              <h5 className="text-xl font-bold mt-2">{student.name}</h5>
              <p className="text-gray-600">{student.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
