import HeaderApp from "./HeaderApp.vue";

describe("<HeaderApp />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HeaderApp);
  });
});
