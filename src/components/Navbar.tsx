import React, { useState, useContext } from 'react';
import logo from '../../public/Group 2.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { classNames } from '@/utils/classNames';
import { UserContext } from '../context/user-context';

export const Navbar = ({ className = '' }) => {
  const { user, logout } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  const handleLogout = () => {
    logout();
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

  return (
    <nav className={classNames(className, 'w-full z-20 top-0 left-0')}>
      <div className="flex container mx-auto items-center justify-between  p-8">
        <Image src={logo} alt="AWSP Logo" className="h-full w-16" />

        <div className="hidden lg:flex space-x-12 h-full justify-center items-center text-white">
          <div className="flex space-x-6">
            {user && (
              <Link href="/Course" className="hover:font-semibold">
                Courses
              </Link>
            )}
            <Link href="#" className="hover:font-semibold">
              About
            </Link>
            <Link href="#" className="hover:font-semibold">
              Contact
            </Link>
            {user && (
              <>
                <Link href="FocalPoint" className="hover:font-semibold">
                  Focal point
                </Link>
                <div className="relative">
                  <button
                    id="dropdownAvatarNameButton"
                    data-dropdown-toggle="dropdownAvatarName"
                    className="flex items-center pe-1 font-medium text-white rounded-full "
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    {user.email}
                    <svg
                      className={`w-2.5 h-2.5 ms-3 transition-transform transform ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div
                      id="dropdownAvatarName"
                      className="z-10 bg-neutral3 absolute right-2 w-full"
                    >
                      <div className="py-2">
                        <Link
                          href="/AccountInfo"
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Account Info
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {!user && (
              <>
                <Link href="Leadboard" className="hover:font-semibold">
                  Leadboard
                </Link>
                <Link href="/Login" className="hover:font-semibold">
                  Sign in
                </Link>
              </>
            )}
          </div>

          {!user && (
            <Link
              href="/Payment"
              className="bg-neutral2 w-[154px] rounded-[40px] h-[50px] text-white font-semibold flex justify-center items-center hover:font-bold"
            >
              Get started
            </Link>
          )}
        </div>

        <button onClick={toggleMenu} className="h-full lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
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
              className="flex-1 h-full z-40"
            >
              <div className="overflow-hidden h-full">
                <motion.div
                  variants={mobileLinkVars}
                  className="h-full flex flex-col justify-center items-center space-y-3"
                >
                  <div className="flex flex-col space-y-3">
                    <Link
                      href="/"
                      className="text-2xl uppercase text-black hover:font-semibold"
                    >
                      Courses
                    </Link>
                    <Link
                      href="/"
                      className="text-2xl uppercase text-black hover:font-semibold"
                    >
                      About
                    </Link>
                    <Link
                      href="/"
                      className="text-2xl uppercase text-black hover:font-semibold"
                    >
                      Contact
                    </Link>
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
