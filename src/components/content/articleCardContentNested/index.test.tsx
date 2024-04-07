import { render } from "@testing-library/react";
import ArticleCardContentNested from "./index";

describe("ArticleCardContentNested", () => {
  it("renders label and options correctly", () => {
    // Define test data
    const label = "Tags";
    const options = ["Technology", "Science", "Programming"];

    // Render the component with test data
    const { getByText } = render(
      <ArticleCardContentNested label={label} options={options} />
    );

    // Check if label is rendered correctly
    expect(getByText(label)).toBeInTheDocument();

    // Check if each option is rendered correctly
    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it("renders label correctly without options", () => {
    // Define test data
    const label = "Tags";

    // Render the component with label only (no options)
    const { getByText } = render(
      <ArticleCardContentNested label={label} options={[]} />
    );

    // Check if label is rendered correctly
    expect(getByText(label)).toBeInTheDocument();
  });
});
