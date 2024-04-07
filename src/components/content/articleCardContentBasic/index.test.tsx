import { render } from "@testing-library/react";
import ArticleCardContentBasic from "./index";

describe("ArticleCardContentBasic", () => {
  it("renders label and value correctly", () => {
    // Define test data
    const label = "Title";
    const value = "Sample Article";

    // Render the component with test data
    const { getByText } = render(
      <ArticleCardContentBasic label={label} value={value} />
    );

    // Check if label and value are rendered correctly
    expect(getByText(`${label}: ${value}`)).toBeInTheDocument();
  });
});
