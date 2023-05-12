describe('Second Test suite',()=>{
    it('Second Test case',()=>{
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       // cy.wait(500);
       // cy.screenshot();
       // console.log(Math.PI)
       // const username = Cypress.env('username')
        const val = Cypress.env('testvar')
        cy.log("val : "+val);
        cy.log()
        cy.url().should('include', '/rahulshettyacademy.com/') 
        cy.url().should('include', '/raj.com/') 
       // cy.log(password);
    })
})