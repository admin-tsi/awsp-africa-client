import React, { useState } from 'react';

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

const Select = ({ value = [], options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const clearOptions = () => {
    onChange([]);
  };

  const selectOption = (option: SelectOption) => {
    if (value.length < 3) {
      const selectedOptions = [...value];
      const optionIndex = selectedOptions.findIndex(
        (opt) => opt.value === option.value
      );

      if (optionIndex !== -1) {
        selectedOptions.splice(optionIndex, 1);
      } else {
        selectedOptions.push(option);
      }

      onChange(selectedOptions);
    }
  };

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleToggle}
        onBlur={() => setIsOpen(false)}
        className="relative w-full min-h-[1.5em] flex items-center gap-[.5em] p-[.5em] rounded-lg outline-none border border-neutral2 bg-black cursor-pointer"
      >
        <div className="flex flex-wrap gap-[.5em] grow max-h-[150px] overflow-y-auto">
          {value.map((selectedOption) => (
            <span
              key={selectedOption.value}
              className="border border-gray-50 text-black text-sm bg-white p-1 rounded-full flex items-center"
            >
              {selectedOption.label}
              <button
                type="button"
                className="ml-1 text-white flex justify-center items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(selectedOption);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <button
          className="text-white"
          id="clear-btn"
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
        >
          Clear
        </button>
        <div id="divider" className="bg-neutral3 self-stretch w-[1px]"></div>
        <div id="caret">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
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
          {options.map(
            (option) =>
              !value.some((opt) => opt.value === option.value) && (
                <li
                  key={option.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(option);
                    setIsOpen(false);
                  }}
                  className="p-2 bg-neutral3 rounded-lg my-2 text-white cursor-pointer hover:bg-white hover:text-black"
                >
                  {option.label}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default Select;
