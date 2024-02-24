describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

  })
  context("Top Section", () => { 
  it('Test to load home page', () => {
    cy.get('[data-test="hero-heading"]').should('be.visible').should('contain.text', "Testing Next.js Applications with Cypress");
    
  })

  it('Course features on home page', () => {
    cy.get('[class="mt-12"]').should('be.visible');
    //const courseItem = "'[class="mt-12"] dl .relative'"
    cy.get('[class="mt-12"] dl .relative').eq(0).should('have.text', '4 Courses');
    cy.get('[class="mt-12"] dl .relative').eq(1).should('have.text', '25+ Lessons');
    cy.get('[class="mt-12"] dl .relative').eq(2).should('contain.text', 'Free and Open Source');     
  })
     
})
context("Courses section", () => {
  it("Verify Get Started button navigates on correct page for First Next.js Application course section", () => {
    cy.getByData("course-0").find(".mt-6 a").contains("Get started").should('be.visible').click();
    cy.url().should('include', "/testing-your-first-application");
    cy.get('h1').should('exist').and('have.text', 'Testing Your First Next.js Application');
  })
  it("Verify Get started button lands on correct page for Testing Foundations course", () => {
    cy.getByData("course-1").find("a").contains("Get started").click();
    cy.url().should('include', "/testing-foundations");
  })
  it("Verify Get started button lands on correct page for Cypress Fundamentals", () => {
    cy.getByData("course-2").find(".mt-6 a").contains("Get started").click();
    cy.url().should('include', "/cypress-fundamentals");
  })
})
})