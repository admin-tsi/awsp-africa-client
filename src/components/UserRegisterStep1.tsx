import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import flag from '../../public/flag.svg';

type Userdata = {
  firstname: string;
  lastname: string;
  phone: number | null;
  city: string;
  state: string;
  locality: string;
};

type UseraccountFormProps = Userdata & {
  updateFields: (fields: Partial<Userdata>) => void;
};

function UserRegisterStep1({
  firstname,
  lastname,
  city,
  phone,
  state,
  locality,
  updateFields,
}: UseraccountFormProps) {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const handlefirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ firstname: e.target.value });
  };

  const handlelastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ lastname: e.target.value });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateFields({
      phone: value !== '' ? parseInt(value, 10) : null,
    });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ city: e.target.value });
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ state: e.target.value });
  };

  const handleLocalityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ locality: e.target.value });
  };

  return (
    <div className="w-full flex flex-col space-y-6 p-5 mt-5">
      <div className="flex space-x-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
          className="w-1/2 h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
        >
          <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
            First name *
          </span>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={handlefirstnameChange}
            placeholder="John"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
          className="w-1/2 h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
        >
          <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
            Last name *
          </span>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            value={lastname}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={handlelastnameChange}
            required
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
          Mobile number *
        </span>
        <span className="text-white w-fit  flex justify-start items-center px-3">
          <Image src={flag} alt="Visa cart logo" height={15} width={25} />
        </span>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="96000000"
          value={phone !== null ? phone.toString() : ''}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          onChange={handlePhoneNumberChange}
          maxLength={8}
          required 
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
            name="city"
            id="city"
            placeholder="Cotonou"
            value={city}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={handleCityChange}
            required
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
            name="littoral"
            id="littoral"
            placeholder="Littoral"
            value={state}
            className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
            onChange={handleStateChange}
            required
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
          name="locality"
          id="locality"
          placeholder="John Doe"
          value={locality}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          onChange={handleLocalityChange}
          required
        />
      </motion.div>
    </div>
  );
}

export default UserRegisterStep1;
