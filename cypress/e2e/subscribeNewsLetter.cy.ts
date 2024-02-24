describe("Test cases for Subscribe functonalities", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    const validEmailId = "samantvinita@gmail.com";
    const inValidEmailId = "samantvinita";


    it("Verify that user is able to successfully subscribe for newletters", () => {
        cy.getByData("email-input").type(validEmailId);
        cy.getByData("submit-button").should("exist").click();
        cy.getByData("success-message").should("be.visible").contains(`Success: ${validEmailId} has been successfully subscribed`);

    })

    it("Verify that user is not able to subscribe with invalid emailid", () => {
        cy.getByData("email-input").type(inValidEmailId);
        cy.getByData("submit-button").should("exist").click();
        cy.getByData("success-message").should("not.exist");
    })
    it("Verify that existing user is not able to subscribe", () => {
        cy.getByData("email-input").type("john@example.com");
        cy.getByData("submit-button").should("exist").click();
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.");
    })
    it("Clicking on subscribe button without passing any data on email field", () => {
        cy.getByData("submit-button").should("exist").click();
        cy.getByData("error-message").should("exist").contains("Email is required");

    })

})