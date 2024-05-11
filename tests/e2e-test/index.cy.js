it('titles are correct', () => {
  const page = cy.visit('/');

  page.get('title').should('have.text', '30 seconds of code');
});

it('Collections loaded successfully', () => {
  cy.visit('/');

  cy.get('section.preview-list').within(() => {
    cy.get('li').should('have.length.gt', 0).its('length').as('liCount');
  });

  cy.get('@liCount').then((liCount) => {
    expect(liCount).to.be.greaterThan(0);
  });
});
