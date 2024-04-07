export interface ToggleBtnProps {
  options: string[];
  selectedOption: string;
  handleChange: (e: React.MouseEvent<HTMLElement>, val: string) => void;
}
