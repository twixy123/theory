import "cypress-localstorage-commands"

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to select DOM element by data-test-id attribute.
       * @example cy.getByTestId('greeting')
       */
      getByTestId(value: string): Chainable<JQuery<HTMLElement>>
      login(): void
    }
  }
}

Cypress.Commands.add("getByTestId", (value) => {
  return cy.get(`[data-test-id=${value}]`)
})

Cypress.Commands.add("login", (): void => {
  cy.visit(Cypress.env("FRONT_URL"));
  cy.get("input#email").type("ruslan1@gmail.com");
  cy.get("input#password").type("123456");
  cy.get("button[type=submit]").click();
})
