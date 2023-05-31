describe("test for user flow", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');    
      })
    it.only("a user flow from home page to course lesson", () => {
        cy.getByData("course-0").find("a").contains("Get started").click();
        cy.url().should('include', "/testing-your-first-application");
       
        cy.getByData("next-lesson-button").should("exist").click();
        cy.wait(5000);
        cy.get('h1#app-install--overview').should('be.visible');


        cy.url().should('include', "/app-install-and-overview");
        cy.getByData("challenge-answer-0").should("be.visible").click();

        cy.getByData("next-lesson-button").should("exist").click();
        cy.wait(3000);
        cy.get('h1#installing-cypress-and-writing-our-first-test').should('be.visible');


        cy.url().should('include', "/installing-cypress-and-writing-our-first-test");
        cy.getByData("challenge-answer-0").should("be.visible").click();

        cy.getByData("next-lesson-button").should("exist").click();
        cy.wait(3000);
        cy.url().should('include', "/setting-up-data-before-each-test");
        cy.getByData("challenge-answer-0").should("be.visible").click();     


        cy.getByData("next-lesson-button").should("be.visible").click();


        
    })

    it("a user flow for course Testing Foundation Course and verify user complets all", () => {
        cy.getByData("course-1").find("a").contains("Get started").click();
        cy.url().contains("/testing-foundations");
        cy.getByData("next-lesson-button").should("exist").click();
        cy.location("pathname").should("equal", "/testing-is-a-mindset");
        cy.getByData("challenge-answer-0").should("be.visible").check();
        cy.getByData("next-lesson-button").should("be.visible").click();
        cy.location("pathname").should("equal", "/knowing-what-to-test");
        cy.getByData("challenge-answer-0").should("be.visible").check();
        cy.getByData("next-lesson-button").should("be.visible").click();        
        cy.location("pathname").should("equal", "/manual-vs-automated-testing");
        cy.getByData("challenge-answer-0").should("be.visible").check();
        cy.getByData("next-lesson-button").should("be.visible").contains("Complete Course").click();
        cy.location("pathname").should("equal", "http://localhost:3000/");
        //verify that after competing the course, all check boxes are checked.
        cy.getByData("course-1").find("lesson-complete-0").should("be.visible");

        


        
    })
})