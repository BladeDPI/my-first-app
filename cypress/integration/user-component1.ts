describe('User Component1', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'MyFirstApp');
  });

  it('has the correct text if not logged', () => {
    cy.get('h1').contains('User not logged in');
    cy.get('p').contains('Please log in first');
  });

  it('has the correct text if logged in', () => {
    cy.get('[data-testid="login-button"]').click();
    cy.get('h1').contains('User logged in1');
    cy.get('p').contains('User is: Max');
  });
});
