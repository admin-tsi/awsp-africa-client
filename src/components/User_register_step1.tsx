import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import flag from '../../public/flag.svg';

type Userdata = {
  firstName: string;
  lastName: string;
  phone_Number: number | null;
  city: string;
  state: string;
  locality: string;
};

type UseraccountFormProps = Userdata & {
  updateFields: (fields: Partial<Userdata>) => void;
};

function User_register_step1({
  firstName,
  lastName,
  city,
  phone_Number,
  state,
  locality,
  updateFields,
}: UseraccountFormProps) {
  let easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <div className="w-full flex flex-col space-y-6 p-5 mt-5">
      <div className="flex space-x-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
          className="w-1/2 h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
        >
          <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
            First name *
          </span>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={(e) => updateFields({ firstName: e.target.value })}
            placeholder="John Doe"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
          className="w-1/2 h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
        >
          <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
            Last name *
          </span>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="John Doe"
            value={lastName}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
          Mobile number *
        </span>
        <span className="text-white w-fit  flex justify-start items-center px-3">
          <Image src={flag} alt="Visa cart logo" height={15} width={25} />
        </span>
        <input
          type="text"
          name="phone_number"
          id="phone_number"
          placeholder="96000000"
          value={phone_Number !== null ? phone_Number.toString() : ''}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          onChange={(e) => {
            const value = e.target.value;
            updateFields({
              phone_Number: value !== '' ? parseInt(value, 10) : null,
            });
          }}
        />
      </motion.div>
      <div className="flex space-x-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: easing, duration: 0.5 }}
          className="w-1/2 h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
        >
          <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
            City *
          </span>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            value={city}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, ease: easing, duration: 0.5 }}
          className="w-1/2 h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
        >
          <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
            State *
          </span>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            value={state}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={(e) => updateFields({ state: e.target.value })}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
          Locality *
        </span>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="John Doe"
          value={locality}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          onChange={(e) => updateFields({ locality: e.target.value })}
        />
      </motion.div>
    </div>
  );
}

export default User_register_step1;
