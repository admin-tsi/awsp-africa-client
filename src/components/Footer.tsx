import React from 'react';
import logo from '../../public/Group 2.svg';
import x from '../../public/x.svg';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="h-fit bg-[#202020]">
      <div className="container mx-auto p-5 flex-col h-fit flex justify-between">
        <div className="h-fit w-full flex flex-col space-y-2 lg:flex-row justify-between">
          <div className="flex flex-col space-y-3">
            <Image src={logo} alt="AWSP Logo" width={100} />
            <Link href="#" className="text-white font-semibold">
              Cotonou, Benin
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-primary font-semibold text-[20px]">
              Navigation
            </span>
            <Link href="#" className="text-white hover:font-semibold">
              Home
            </Link>
            <Link href="#" className="text-white hover:font-semibold">
              Sign in
            </Link>
            <Link href="#" className="text-white hover:font-semibold">
              Join us
            </Link>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <span className="text-primary font-semibold text-[20px]">
              Contact
            </span>
            {/* Mail */}
            <div className="text-white flex justify-center items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                awsp-contact@awsp.com
              </Link>
            </div>
            {/* Linkedin */}
            <div className="text-white flex justify-center items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>

              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                awsp-africa
              </Link>
            </div>
            {/* x */}
            <div className="text-white flex justify-center items-center space-x-1">
              <Image src={x} alt="linkedin Logo" width={16} height={15} />
              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                awsp-africa
              </Link>
            </div>
            {/* Instagram */}
            <div className="text-white flex justify-center items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                awsp-africa
              </Link>
            </div>
            <div className="text-white flex justify-center items-center space-x-1">
              <svg
                fill="#ffff"
                className="h-4 w-4"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g id="XMLID_834_">
                    {' '}
                    <path
                      id="XMLID_835_"
                      d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                    ></path>{' '}
                  </g>{' '}
                </g>
              </svg>

              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                awsp-africa
              </Link>
            </div>{' '}
          </div>
          <div className="flex flex-col items-start space-y-1">
            <span className="text-primary font-semibold text-[20px]">
              Legal
            </span>
            <div className="text-white flex justify-center items-center space-x-1">
              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                Legal notice
              </Link>
            </div>
            <div className="text-white flex justify-center items-center space-x-1">
              <Link
                href="#"
                className="h-full flex justify-center items-center hover:font-semibold"
              >
                General Conditions of Sale and Use
              </Link>
            </div>
          </div>
        </div>
        <span className="text-white my-5">
          © 2023 AWSP | all rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
