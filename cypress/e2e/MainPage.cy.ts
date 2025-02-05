describe('Main page tests', () => {  
  
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  
  it('Main page should display a title', () => {
    cy.contains("Shopping")
  });

  it("Main page should display the products", () => {
    cy.get('[data-cy="product-list"]').should('be.visible');
    cy.get('[data-cy="product-card"]').should('have.length', 4);
  });

  it("Main page should display the shopping cart", () => {
    cy.get('[data-cy="shopping-cart"]').should('be.visible')
  });

  it("User is able to add a product to the shopping cart", () => {
    cy.get(':nth-child(1) > .rt-BaseCard > [data-testid="add-to-cart-button"]')
      .first()
      .should('be.visible')
      .click();
    cy.get('[data-cy="cart-item"]')
      .should('be.visible')
      .should('have.length', 1);
    cy.get('[data-testid="cart-total"]')
      .contains('Total: R$ 30,00');
  });

  it("User should be able to go to the checkout page after select products", () => {
    cy.get('[data-cy="checkout-button"]').should('be.disabled');
    cy.get(':nth-child(1) > .rt-BaseCard > [data-testid="add-to-cart-button"]')
      .first()
      .click();
    cy.get('[data-cy="checkout-button"]')
      .should('be.disabled')
      .click();
    cy.url().should('include', '/checkout');
  })
})