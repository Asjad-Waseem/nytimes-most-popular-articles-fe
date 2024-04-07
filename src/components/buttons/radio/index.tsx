import { RadioBtnProps } from "./types";

const RadioBtnGrp = ({
  className,
  options,
  selectedOption,
  handleSelectedChange,
}: RadioBtnProps): JSX.Element => {
  return (
    <>
      {options?.map((option, index) => (
        <label
          key={index}
          className={`
    px-6 py-4 shadow rounded-lg cursor-pointer
    transition-all ${
      option === selectedOption
        ? "bg-gradient-to-t from-violet-200 to-violet-100 text-violet-800 shadow-violet-500 scale-105"
        : "bg-white hover:shadow-md shadow-gray-300"
    } `}
        >
          <input
            type="radio"
            className={className}
            name="fav_language"
            value={option}
            checked={option === selectedOption}
            onChange={handleSelectedChange}
          />
        </label>
      ))}
    </>
  );
};

export default RadioBtnGrp;
