// https://docs.cypress.io/api/introduction/api.html

describe("App should appeat without error", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Home");
    cy.contains("h1", "Create a todo");
  });
});
