import React from 'react';
import { motion } from 'framer-motion';

type Userdata = {
  age: string;
  sex: string;
  profession: string;
  education: string;
  nationality: string;
};

type UseraccountFormProps = Userdata & {
  updateFields: (fields: Partial<Userdata>) => void;
};

const UserRegisterStep1 = ({
  age,
  sex,
  profession,
  education,
  nationality,
  updateFields,
}: UseraccountFormProps) => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const handleInputChange = (field: keyof Userdata, value: string) => {
    if (field === 'age') {
      const ageDate = new Date(value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - ageDate.getFullYear();

      if (age < 18) {
        alert('You must be 18 years or older to register.');
        return;
      }
    }

    updateFields({ [field]: value });
  };

  return (
    <div className="w-full flex flex-col space-y-6 p-5 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[30%] font-semibold flex justify-start items-center px-3">
          Date of Birth *
        </span>
        <input
          type="date"
          name="birth_date"
          id="birth_date"
          value={age}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          onChange={(e) => handleInputChange('age', e.target.value)}
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[50%] font-semibold flex justify-start items-center px-3">
          Nationality *
        </span>
        <input
          type="text"
          name="nationality"
          id="nationality"
          placeholder="Nationality"
          value={nationality}
          onChange={(e) => handleInputChange('nationality', e.target.value)}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
          Gender *
        </span>
        <select
          id="gender"
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md cursor-pointer"
          value={sex}
          onChange={(e) => handleInputChange('sex', e.target.value)}
          required
        >
          <option value="" disabled>
            Choose your gender
          </option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="n">Non-Binary</option>
          <option value="O">Other</option>
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
          onChange={(e) => handleInputChange('profession', e.target.value)}
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-[30%] font-semibold flex justify-start items-center px-3">
          Degree *
        </span>
        <select
          id="degree"
          className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md cursor-pointer"
          value={education}
          onChange={(e) => handleInputChange('education', e.target.value)}
          required
        >
          <option value="" disabled>
            Choose your education level
          </option>
          <option value="Associate's Degree" selected>
            Associate&apos;s Degree
          </option>
          <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Master's Degree">Master&apos;s Degree</option>
          <option value="Other">Other</option>
        </select>
      </motion.div>
    </div>
  );
};

export default UserRegisterStep1;
