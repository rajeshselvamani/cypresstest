
describe('Second Test suite',()=>{
    it('Second Test case',()=>{
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       // cy.wait(500);
       // cy.screenshot();
       // console.log(Math.PI)
      // const username = Cypress.env('username')
        const val = Cypress.env('samp')
        cy.log("val : "+val);
        cy.url().should('include', '/rahulshettyacademy.com/') 

        if(val === 'hellos'){
            cy.url().should('include', '/rahulshettyacademy.com/') 

        }else{

            cy.url().should('include', '/rajesh.com/') 
        }
        


        //expect(val).to.equal('hello')
       // cy.log(password);
    })
})