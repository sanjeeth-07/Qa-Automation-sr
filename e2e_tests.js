// <reference types="cypress" />

describe("OpenOceanStudio:Crew Applications ", () => {
  it("search for the candidates from homepage", () => {
    // visit the home page

    cy.visit("/");

    // search for the particular user

    cy.get("#name").click().type("lloyd");
    cy.get('[type="submit"]').click();
  });

  it("search and clear the user", () => {
    cy.visit("/");

    // search for the particular user

    cy.get("#name").click().type("lloyd");
    cy.get('[type="submit"]').click();
    // clear the entry and assert for empty name and city fields

    cy.get('#filters > [type="button"]').click();

    cy.get("#city").should("have.value", "");
    cy.get("#name").clear();
    cy.get("#name").should("have.value", "");
  });
    
    
    it('add candidates to the system', () =>
    {

        cy.visit("/");
        
    })
});
