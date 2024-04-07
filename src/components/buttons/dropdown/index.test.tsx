import { render, fireEvent } from "@testing-library/react";
import Dropdown from "./index";

describe("Dropdown", () => {
  const options = [1, 2, 3];
  const selectedOption = 1;
  const handleSelectedChange = jest.fn();

  beforeEach(() => {
    handleSelectedChange.mockClear();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        handleSelectedChange={handleSelectedChange}
      />
    );

    // Check if selected option is rendered
    expect(getByTestId(`option-${selectedOption}`)).toBeInTheDocument();

    // Check if each option is rendered
    options.forEach((option) => {
      expect(getByTestId(`option-${option}`)).toBeInTheDocument();
    });
  });

  it("calls handleSelectedChange when option is clicked", () => {
    const { getByTestId } = render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        handleSelectedChange={handleSelectedChange}
      />
    );

    // Find and click the option
    const option = getByTestId(`option-${selectedOption}`);
    fireEvent.click(option);
  });

  it("does not call handleSelectedChange when selected option is clicked again", () => {
    const { getByTestId } = render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        handleSelectedChange={handleSelectedChange}
      />
    );

    // Find and click the option again
    const option = getByTestId(`option-${selectedOption}`);
    fireEvent.click(option);
  });
});
