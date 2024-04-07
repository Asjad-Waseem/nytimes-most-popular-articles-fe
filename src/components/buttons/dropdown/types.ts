export interface DropdownProps {
  options: number[];
  selectedOption: number;
  handleSelectedChange: (option: number) => void;
}
