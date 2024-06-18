describe("Add new product", () => {
  beforeEach(() => {
    cy.login();
  })

  it("Should has opportunity for add product", async () => {
    cy.intercept("POST", "http://localhost:3000/api/product/add").as("addProduct");

    cy.url().should('contain', '/home');
    cy.get("a[href=\"/product/add\"]").click()
    cy.url().should('contain', '/product/add');
    cy.get("h1").should("have.text", "Добавить продукт");
    cy.get("input#name").type("IPhone");
    cy.get("textarea#description").type("It's a good one");
    cy.get("input#price").type("1200");
    cy.get("button[type=submit]").click();

    let uuid: string | null = null;

    await new Promise((resolve) => {
      cy
        .wait("@addProduct")
        .then(({response}) => {
          uuid = response?.body?.uuid || null
          resolve(uuid);
        })
    })

    if (!uuid) {
      cy.wrap(false).should('be.true', 'UUID не был получен в ответе от бэкенда');
    }
    cy.get("a[href=\"/\"]").click();

    cy.url().should('contain', '/home');
    cy.get(`a[href="/product/${uuid}"]`).click();

    cy.url().should("contain", `/product/${uuid}`);
    cy.get("button[type=button]").contains("Удалить продукт").click()
    cy.url().should('contain', '/home');

    cy.wrap(uuid).as('uuid');
  })
})
