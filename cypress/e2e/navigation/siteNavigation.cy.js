describe('Navigation Test Cases', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify Test Cases Page', () => {
        cy.contains('Test Cases').click();
        cy.url().should('include', '/test_cases');
        cy.get('h2').should('contain', 'Test Cases');
    });

    it('Verify Subscription in home page', () => {
        cy.get('#footer').scrollIntoView();
        cy.get('h2').should('contain', 'Subscription');
        cy.get('#susbscribe_email').type('test@example.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('be.visible').and('contain', 'You have been successfully subscribed!');
    });

    it('Verify Scroll Up using Arrow button', () => {
        cy.get('#footer').scrollIntoView();
        cy.get('#scrollUp').click();
        cy.get('.active .item h2').should('be.visible'); // Automation Engineers carousel text
    });
});
