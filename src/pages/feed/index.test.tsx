import { render, screen } from "@testing-library/react";
import Feed from "./index";

jest.mock("@api/services", () => ({
  MostPopularArticlesService: {
    fetchMostPopularArticles: jest.fn(() =>
      Promise.resolve({ data: { results: [] } })
    ),
  },
}));

test("renders the Feed component with dropdown and articles", async () => {
  render(<Feed />);

  // Check title
  expect(
    screen.getByText(/NY Times Most Popular Articles/i)
  ).toBeInTheDocument();

  // Check dropdown options
  expect(screen.getByTestId("option-1")).toBeInTheDocument();
  expect(screen.getByTestId("option-7")).toBeInTheDocument();
  expect(screen.getByTestId("option-30")).toBeInTheDocument();
});
