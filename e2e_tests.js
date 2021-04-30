// <reference types="cypress" />

describe("OpenOceanStudio:Crew Applications - E2E TEST CASES ", () => {
  
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
    cy.get(".CrewMemeber-name > :nth-child(1)").contains("lloyd");
    
    // clear the entry and assert for empty name and city fields

    cy.get('#filters > [type="button"]').click();
    cy.get("#city").should("have.value", "");
    cy.get("#name").clear();
    cy.get("#name").should("have.value", "");
    
    // search for the candidate with a specific city
    
    cy.get("#city").click().type("hereford");
    cy.get('[type="submit"]').click();
    cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > .CrewMember-info > .CrewMemeber-name > :nth-child(2)").contains("hereford");
    
  });

  it("add candidates to the system", () => {
    
    cy.visit("/");
    
    // add candidate to the system
    
    cy.get("#name").click().type("adam");
    cy.get("#city").click().type("newyork");
    cy.get('[type="submit"]').click();
    cy.get("#name").clear();
    cy.get("#city").clear();

    cy.get("#name").should("have.value", "");
    cy.get("#city").should("have.value", "");
    
  });

  it("change the status of candidates", () => {
    
    cy.visit("/");
    
    cy.get(":nth-child(2) > .CrewMember-toolbar > .CrewMember-up").click();
    // interviewing
    
    cy.get( ":nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > .CrewMember-up").click();
    // hired
    
    cy.get(":nth-child(3) > :nth-child(1) > :nth-child(3) > .CrewMember-toolbar > button").click();
    // applied 
    
    cy.get( ":nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > :nth-child(1)").click();
  });
});
