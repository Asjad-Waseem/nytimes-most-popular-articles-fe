export interface RadioBtnProps {
  className?: string;
  options: string[];
  selectedOption: string;
  handleSelectedChange: React.ChangeEventHandler<HTMLInputElement>; // Change the type here
  // handleSelectedChange: (e: React.MouseEvent<HTMLElement>, val: string) => void;
}
