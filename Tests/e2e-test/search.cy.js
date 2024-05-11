it('search', () => {
  const page = cy.visit('/');

  cy.get('button[data-open-modal="omnisearch"]').click();
  cy.get('input[type="search"]').type('CSS');
  cy.get('output[aria-label="Search results"]').within(() => {
    cy.get('ul').should('have.length.gt', 0).its('length').as('ulCount');
  });
  cy.get('@ulCount').then((ulCount) => {
    expect(ulCount).to.be.greaterThan(0);
  });
});
