
describe('custom commands', () => {
  it('login', () => {
    cy.visit('https://demo.x-cart.com/demo/login.php')
    cy.login('demo-customer@x-cart.com','customer')
    cy.get('.name').should('contain.text','Mr. John Smith')
  })
})