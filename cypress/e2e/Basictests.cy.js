describe('Basic Test',()=>{

    it(' Verify the home page title and content',()=>{
        cy.visit('https://demo.x-cart.com/demo/home.php');
        cy.title().should('eq', 'Your Company Name');
        cy.get("img[alt='Your Company Name']").should('be.visible');
        cy.url().should('include','home')
    })
})