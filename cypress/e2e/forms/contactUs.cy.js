import ContactFormPage from '../../support/pageObjects/ContactFormPage';

describe('Contact Us Form Tests', () => {
    beforeEach(() => {
        ContactFormPage.visit();
    });

    it('Test Case 6: Contact Us Form', () => {
        ContactFormPage.submitForm('Test Name', 'test@example.com', 'Test Subject', 'This is a test message');

        cy.on('window:confirm', () => true); // Handle alert "Press OK to proceed is not implemented in demo but standard in logic"

        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');

        cy.get('.btn-success').click(); // Home button
    });
});
