describe('ui and visual Test',()=>{

    it(' Verify the elements are visible are not',()=>{
        cy.visit('https://demo.x-cart.com/demo/home.php');
        cy.title().should('eq', 'Your Company Name');
        cy.get("img[alt='X-Cart']").should('be.visible');
        cy.get("div[class='title'] h2").should('be.visible')
        cy.get(" div[class='bestsellers-cell'] h2").should('have.text','Bestsellers')
        cy.get('.label.market-price').should('be.visible')
        cy.get(':nth-child(3) > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button').should('not.be.disabled')
    })
})