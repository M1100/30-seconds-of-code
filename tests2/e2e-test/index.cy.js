it('titles are correct', () => {
  const page = cy.visit('/');

  page.get('title').should('have.text', '30 seconds of code');
});
