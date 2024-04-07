import { render, screen } from "@testing-library/react";
import Article from "./index";

describe("Article component", () => {
  const mockArticleData = {
    title: "Sample Title",
    published_date: "2024-04-07",
    id: "sample-id",
    uri: "sample-uri",
    url: "sample-url",
    asset_id: "sample-asset-id",
    source: "sample-source",
    updated: "2024-04-07T12:00:00Z",
    section: "sample-section",
    subsection: "sample-subsection",
    nytdsection: "sample-nytdsection",
    adx_keywords: "sample-keywords",
    column: "sample-column",
    byline: "sample-byline",
    type: "sample-type",
    abstract: "sample-abstract",
    des_facet: ["facet1", "facet2"],
    org_facet: ["org1", "org2"],
    per_facet: ["per1", "per2"],
    media: [
      {
        type: "image",
        subtype: "sample-subtype",
        caption: "Sample Caption",
        copyright: "Sample Copyright",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "sample-media-url",
            format: "sample-format",
            height: 100,
            width: 100,
          },
        ],
      },
    ],
    eta_id: 123,
  };

  it("renders article with provided data", () => {
    render(<Article {...mockArticleData} />);
    expect(screen.getByText(/sample-uri/i)).toBeInTheDocument();
  });
});
