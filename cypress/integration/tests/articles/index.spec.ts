export {}

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/tests/articles")
  })

  // TODO: maybe separate ?
  it("can CRUD article", () => {
    const TITLE = "testing article"
    const UPDATED_TITLE = "updated testing article"

    // create
    let prevCount = 0
    cy.get("[data-testid=delete]").then((elements)=>{
      prevCount = elements.length
    })

    cy.get("[data-testid=input-title]")
      .type(TITLE)
    cy.get("[data-testid=create]")
      .click()

    cy.get("[data-testid=list-article]")
      .last()
      .should("have.text", TITLE)
    cy.get("[data-testid=list-item-article]")
      .its("length")
      .should("be", prevCount + 1)

    // update
    cy.get("[data-testid=input-title]")
      .type(UPDATED_TITLE)
    cy.get("[data-testid=update]")
      .last()
      .click()
    cy.get("[data-testid=list-item-article]")
      .last()
      .should("have.text", UPDATED_TITLE)

    // delete
    cy.get("[data-testid=delete]")
      .last()
      .click()
    cy.get("[data-testid=delete]")
      .its("length")
      .should("be", prevCount)
  })
})
