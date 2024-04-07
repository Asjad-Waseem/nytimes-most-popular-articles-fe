export interface DropdownProps {
  options: number[];
  selectedOption: number;
  handleSelectedChange: (option: number) => void; // Update the type to accept a string
}
