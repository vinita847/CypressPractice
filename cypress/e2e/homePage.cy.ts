describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

  })
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

  it.only('Subsribe for update with valid email', () => {
    cy.get('[data-test="email-input"]').should('be.exist').type("samantvinita@gamil.com");
    cy.get('[data-test="submit-button"]').click();
    cy.get('[data-test="success-message"]').should('be.visible').contains('Success: ');


        

  })
})