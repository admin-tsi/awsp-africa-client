import React, { useState } from 'react';

type SelectOption = {
  label: string;
  value: any;
};
type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const clearOptions = () => {
    onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    onChange(option);
  };

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleToggle}
        onBlur={() => setIsOpen(false)}
        className="relative w-full min-h-[1.5em] flex items-center gap-[.5em] p-[.5em] rounded-lg outline-none border border-neutral2 cursor-pointer"
      >
        <span id="select-value" className="grow text-white">
          {value?.label}
        </span>
        <button
          id="clear-btn"
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
        >
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
        <div id="divider" className="bg-red-500 self-stretch w-[1px]"></div>
        <div id="caret">
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <ul
          className={`m-0 p-[.5em] max-h-[15em] overflow-y-auto border border-neutral2 rounded-lg w-full left-0 top-12 absolute bg-neutral z-30 ${
            isOpen ? 'visible' : 'hidden'
          }`}
        >
          {options
            .filter((optionItem) => optionItem.value !== value?.value)
            .map((option) => (
              <li
                key={option.label}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
                className="p-2 bg-neutral3 rounded-lg my-2 text-white cursor-pointer hover:bg-primary hover:text-black"
              >
                {option.label}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
