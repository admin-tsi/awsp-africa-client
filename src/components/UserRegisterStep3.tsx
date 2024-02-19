import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Select from '@/components/Select';

type SelectOption = {
  label: string;
  value: any;
};

type Userdata3 = {
  sports: string[];
  communication: string;
  passions: string[];
};

type UseraccountFormProps = Userdata3 & {
  updateFields: (fields: Partial<Userdata3>) => void;
};

function UserRegisterStep3({
  sports,
  communication,
  passions,
  updateFields,
}: UseraccountFormProps) {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const handleInputChange = (field: keyof Userdata3, value: string) => {
    updateFields({ [field]: value });
  };

  const [selectedSports, setSelectedSports] = useState<SelectOption[]>([]);
  const [selectedPassions, setSelectedPassions] = useState<SelectOption[]>([]);

  const handleSportChange = (selectedOptions: SelectOption[]) => {
    setSelectedSports(selectedOptions);
    const selectedSportValues = selectedOptions.map((option) => option.value);
    updateFields({ sports: selectedSportValues });
    console.log('Selected Sports:', selectedSportValues);
  };

  const handlePassionChange = (selectedOptions: SelectOption[]) => {
    setSelectedPassions(selectedOptions);
    const selectedPassionValues = selectedOptions.map((option) => option.value);
    updateFields({ passions: selectedPassionValues });
    console.log('Selected Passions:', selectedPassionValues);
  };

  const sportOptions: SelectOption[] = [
    { label: "Athletics", value: "Athletics" },
    { label: "Basketball", value: "Basketball" },
    { label: "Soccer", value: "Soccer" },
    { label: "Baseball", value: "Baseball" },
  ];

  const passionOptions: SelectOption[] = [
    { label: "Reading", value: "Reading" },
    { label: "Traveling", value: "Traveling" },
    { label: "Cooking", value: "Cooking" },
    { label: "Gaming", value: "Gaming" },
  ];

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
        <Select
          options={sportOptions}
          value={selectedSports}
          onChange={handleSportChange}
        />
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
          <option value="Social Network" selected>Social Network</option>
          <option value="Home">Home</option>
        </select>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: easing, duration: 0.5 }}
        className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center px-5 relative"
      >
        <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[30%] font-semibold flex justify-start items-center px-3">
          Your Passion *
        </span>
        <Select
          options={passionOptions}
          value={selectedPassions}
          onChange={handlePassionChange}
        />
      </motion.div>
    </div>
  );
}

export default UserRegisterStep3;
