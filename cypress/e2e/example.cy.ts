// https://docs.cypress.io/api/introduction/api.html

describe("App should appeat without error", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Home");
  });
  it("visits the app root url", () => {
    cy.visit("/todo_list");
    cy.contains("h1", "Todo list");
  });
});
