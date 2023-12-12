import React, { useState } from 'react';
import logo from '../../public/Group 2.svg';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const navLinks = [
    { title: 'Courses', href: '/' },
    { title: 'About', href: '/' },
    { title: 'Contact', href: '/' },
  ];

  return (
    <nav className="w-full h-16">
      <div className="container mx-auto h-full w-full flex justify-between items-center px-5">
        <Image src={logo} alt="AWSP Logo" className="h-full w-16" />
        <div className="hidden lg:flex space-x-12 h-full justify-center items-center">
          <div className="flex space-x-6">
            <Link href="#" className='hover:font-semibold'>Courses</Link>
            <Link href="#" className='hover:font-semibold'>About</Link>
            <Link href="#" className='hover:font-semibold'>Contact</Link>
          </div>
          <button className="bg-neutral w-[154px] rounded-[40px] h-[50px] text-white font-semibold">
            Sign in
          </button>
        </div>
        <button onClick={toggleMenu} className="h-full lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-primary text-black p-5"
          >
            <div className="flex justify-between items-center">
              <span className="text-neutral text-xl">AWSP Africa</span>
              <button onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex-1 h-full"
            >
              <div className="overflow-hidden h-full">
                <motion.div
                  variants={mobileLinkVars}
                  className="h-full flex flex-col justify-center items-center space-y-3"
                >
                  <div className="flex flex-col space-y-3">
                    <Link href="/" className="text-2xl uppercase text-black hover:font-semibold">Courses</Link>
                    <Link href="/" className="text-2xl uppercase text-black hover:font-semibold">About</Link>
                    <Link href="/" className="text-2xl uppercase text-black hover:font-semibold">Contact</Link>
                  </div>
                  <button className="bg-neutral w-[154px] rounded-[40px] h-[50px] text-white font-semibold shadow-md">
                    Sign in
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
