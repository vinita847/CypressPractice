describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

  })
  context("Top Section", () => { 
  it('Test to load home page', () => {
    cy.get('[data-test="hero-heading"]').should('be.visible').contains("Testing Next.js Applications with Cypress");
    
  })

  it('Course features on home page', () => {
    cy.get('[class="mt-12"]').should('be.visible');
    //const courseItem = "'[class="mt-12"] dl .relative'"
    cy.get('[class="mt-12"] dl .relative').eq(0).contains('4 Courses');
    cy.get('[class="mt-12"] dl .relative').eq(1).contains('25+ Lessons');
    cy.get('[class="mt-12"] dl .relative').eq(2).contains('Free and Open Source');     
  })
     
})
context("Courses section", () => {
  it("Testing Your First Next.js Application", () => {
    cy.getByData("course-0").find("a").contains("Get started").click();
    cy.url().contains("/testing-your-first-application");
  })
  it("Testing Foundations", () => {
    cy.getByData("course-1").find("a").contains("Get started").click();
    cy.url().contains("/testing-foundations");
  })
  it("Cypress Fundamentals", () => {
    cy.getByData("course-2").find("a").contains("Get started").click();
    cy.url().contains("/cypress-fundamentals");
  })
})
})