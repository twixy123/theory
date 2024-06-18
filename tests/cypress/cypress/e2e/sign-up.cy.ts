describe("Sign up", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("FRONT_URL"));
  })

  it("is page active", () => {
    cy.title().should("eq", "Vite App");
  })

  it("Is it Sign in page", () => {
    cy.get("[class*=form__header]").contains("Авторизация")
  })

  it("The page should has only two inputs", () => {
    cy
      .get("[class*=form__main]")
      .get("input")
      .should("have.length", 2)
  })

  it("Sign in", () => {
    cy.get("input#email").type("ruslan1@gmail.com");
    cy.get("input#password").type("123456");
    cy.get("button[type=submit]").click();
    cy.url().should('contain', '/home');
    cy.get("h1").should("have.text", "Hello from home page");
  })
})
