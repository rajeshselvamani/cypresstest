describe('First Test suite',()=>{
    it('First Test case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.wait(500);
       // cy.screenshot();
        console.log(Math.PI)
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.log(username);
        cy.log(password);
    })
})