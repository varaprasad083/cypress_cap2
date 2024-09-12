describe('Functional Tests', () => {
    it('Should login, search a product, add to cart, and checkout', () => {
  
      cy.visit('https://demo.x-cart.com/demo/login.php');
      cy.get('#username').clear().type('demo-customer@x-cart.com');
      cy.get('#password').clear().type('customer');
      cy.get('.button-left').click();
  
      // Search for product
      cy.get(".line3 input[placeholder='Enter keyword...']").type('Laptop{enter}');
      cy.get('.first > .item-box > .details > .product-title').should('contains.text','Acer Aspire ONE 10.1" Netbook');
      cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left').click()

      cy.go('back')
      cy.get(".line3 input[placeholder='Enter keyword...']").clear().type('imac{enter}');
      cy.get('.first > .item-box > .details > .product-title').should('contains.text','iMac');
      cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left').click()
      // Add to cart
    cy.get(".ui-dialog-title").should('contain.text','item added to cart')
    cy.get('.view-cart').click()
    cy.get('h1').should('contain','Your shopping cart')
   
  
    //   // Proceed to checkout
    cy.get('.checkout-3-button > a').click()
    cy.get('#accept_terms').check()
    cy.get('.button-right').click()
  
    //   // Verify order confirmation
        cy.get('.title > h2').should('have.text','Confirmation')
        cy.get('.text-block').should('have.text','Congratulations! Your order has been successfully placed.')
    });
  });
  