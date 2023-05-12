const { expect } = require("chai");

describe('Second Test suite',()=>{
    it('Second Test case',()=>{
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       // cy.wait(500);
       // cy.screenshot();
       // console.log(Math.PI)
       // const username = Cypress.env('username')
        const val = Cypress.env('TESTVAR')
        cy.log("val : "+val);
        cy.log()
        cy.url().should('include', '/rahulshettyacademy.com/') 
        expect(val).to.equal('hello')
       // cy.log(password);
    })
})