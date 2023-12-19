import React from 'react';
import { motion } from 'framer-motion';

type Userdata3 = {
  sport: string;
  communication: string;
  passion: string;
};

type UseraccountFormProps = Userdata3 & {
  updateFields: (fields: Partial<Userdata3>) => void;
};

function UserRegisterStep3({
  sport,
  communication,
  passion,
  updateFields,
}: UseraccountFormProps) {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const handleInputChange = (field: keyof Userdata3, value: string) => {
    updateFields({ [field]: value });
  };

  return (
    <div className="w-full flex flex-col space-y-6 p-5 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[30%] font-semibold flex justify-start items-center px-3">
          Your Sport *
        </span>
        <select
          id="sport"
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md cursor-pointer"
          value={sport}
          onChange={(e) => handleInputChange('sport', e.target.value)}
        >
          <option value="Athletics">Athletics</option>
          <option value="Basketball">Basketball</option>
          <option value="Soccer">Soccer</option>
          <option value="Baseball">Baseball</option>
        </select>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[60%] font-semibold flex justify-start items-center px-3">
          How did you hear about AWSP? *
        </span>
        <select
          id="comm"
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md cursor-pointer"
          value={communication}
          onChange={(e) => handleInputChange('communication', e.target.value)}
        >
          <option value="Social Network">Social Network</option>
          <option value="Home">Home</option>
        </select>
      </motion.div>
      <div className="w-full h-full p-5 bg-black rounded-lg">
        <motion.textarea
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
          id="message"
          rows={4}
          className="bg-black text-white h-full w-full rounded-lg px-2 outline-none shadow-md p-5"
          placeholder="What are your passions?"
          value={passion}
          onChange={(e) => handleInputChange('passion', e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserRegisterStep3;
