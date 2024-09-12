describe('Form Validation - Edge Cases', () => {
    it('Should display error for empty required fields', () => {
      // Visit the page with the form
      cy.visit('https://demo.x-cart.com/demo/register.php');
  
      cy.get('#firstname').type('typo'); 
      cy.get('#lastname').type('mean'); 
      cy.get('#email').type('invalidEmailFormat'); 
      cy.get('#passwd1').type('short'); 
      cy.get('#passwd2').type('different'); 
      cy.get('#accept_terms_register').check()
      cy.get('.button-left').click();
  
      // Check that validation errors are displayed for required fields
      cy.get('.error-label').should('have.text','Email address is invalid! Please correct');
      cy.get('.validate-mark > img').should('be.visible');
    });
      
    it('sesrch result invalid',()=>{

        cy.visit('https://demo.x-cart.com/demo/home.php')
        cy.get(".line3 input[placeholder='Enter keyword...']").type('keyboards{enter}');
        cy.get('em').should('contain.text','Warning')
        cy.get('.box.ui-corner-bottom.message-w').should('contain.text',' Sorry, your search returned no results. Try again with different criteria.')

    })
  });
  