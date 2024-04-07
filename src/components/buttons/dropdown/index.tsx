import { useState } from "react";
import { DropdownProps } from "./types";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = ({
  options,
  selectedOption,
  handleSelectedChange,
}: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-testid="dropdown-test"
      className="font-medium h-40 border-gray-300 rounded"
    >
      <div
        onClick={() => setOpen(!open)}
        className={` bg-white w-full p-2 flex items-center border-b border-gray-500	 justify-between rounded ${
          !selectedOption && "text-gray-700"
        }`}
      >
        {selectedOption}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={` bg-white mt-2 overflow-y-auto border-purple-900 ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {options?.map((option: number, index: number) => (
          <li
            key={index}
            data-testid={`option-${option}`}
            className={`p-2 text-sm hover:bg-gray-200
            ${option === selectedOption && "bg-sky-600 text-white"}
          `}
            onClick={() => {
              if (option !== selectedOption) {
                handleSelectedChange(option);
                setOpen(false);
              }
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
