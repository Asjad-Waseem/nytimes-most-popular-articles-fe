import { FEED_TITLE, FEED_SUBTITLE } from "../constants";

describe("a user visits our ny times most popular articles web app", () => {
  it("renders all the ui elements on the feeds page", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="feed-title"]')
      .should("exist")
      .should("have.text", FEED_TITLE);
    cy.get('[data-testid="feed-subtitle"]')
      .should("exist")
      .should("have.text", FEED_SUBTITLE);
    cy.get('[data-testid="dropdown-test"]').should("exist");
    cy.get('[data-testid="feed-divider"]').should("exist");
    cy.get('[data-testid="feed-articles-list"]').should("exist");
  });
});
