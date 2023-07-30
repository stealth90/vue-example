// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { createPinia } from "pinia";
import routes from "../../src/router/routes";

Cypress.Commands.add("mount", (component, options = {}) => {
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];
  options.global.plugins.push(createPinia());
  if (!options.router) {
    options.router = createRouter({
      routes,
      history: createMemoryHistory(),
    });
  }
  options.global.plugins.push({
    install(app) {
      app.use(options.router);
    },
  });

  return mount(component, options);
});

// Example use:
// cy.mount(MyComponent)
