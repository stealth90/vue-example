import { createMemoryHistory, createRouter } from "vue-router";
import HeaderApp from "./HeaderApp.vue";
import routes from "@/router/routes";

describe("<HeaderApp />", () => {
  it("render without error", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HeaderApp);
  });

  it('home link should be active when url is "/"', () => {
    // No need to pass in custom router as default url is '/'
    cy.mount(HeaderApp);
    cy.get("a").contains("Home").should("have.class", "router-link-active");
  });

  it("should change route", () => {
    const router = createRouter({
      routes: routes,
      history: createMemoryHistory(),
    });
    cy.wrap(router.push("/todo_list"));
    cy.mount(HeaderApp, {router});
    cy.get('[href="/todo_list"]').should("have.class", "router-link-active")
  });
});
