import React, { FC } from 'react';

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ label, id, type, placeholder, pattern, required, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-black text-white text-sm rounded-lg outline-none block w-full p-2.5  "
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        value={value || ''}
        onChange={onChange} 
      />
    </div>
  );
}

export default Input;
