import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Input from './Input';

type Userdatas2 = {
  birth: string;
  gender: string;
  profession: string;
  degree: string;
};

type UseraccountFormProps = Userdatas2 & {
  updateFields: (fields: Partial<Userdatas2>) => void;
};

const User_register_step2 = ({
  birth,
  gender,
  profession,
  degree,
  updateFields,
}: UseraccountFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <div className="w-full flex flex-col space-y-6 p-5 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
          Date of Birth *
        </span>
        <input
          type="date"
          name="birth_date"
          id="birth_date"
          value={birth}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          onChange={(e) => updateFields({ birth: e.target.value })}
          
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 absolute right-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
          Gender *
        </span>
        <select
          id="gender"
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md cursor-pointer"
          value={gender}
          onChange={(e) => updateFields({ gender: e.target.value })}
        >
          <option value="Male" selected>Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Other">Other</option>
        </select>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
          Profession *
        </span>
        <input
          type="text"
          name="profession"
          id="profession"
          placeholder="Coach"
          value={profession}
          onChange={(e) => updateFields({ profession: e.target.value })}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 absolute right-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
          Degree *
        </span>
        <select
          id="degree"
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md cursor-pointer"
          value={degree}
          onChange={(e) => updateFields({ degree: e.target.value })}
        >
          <option value="Associate's Degree">Associate&apos;s Degree</option>
          <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Master's Degree">Master&apos;s Degree</option>
          <option value="Other">Other</option>
        </select>
      </motion.div>
    </div>
  );
};

export default User_register_step2;
