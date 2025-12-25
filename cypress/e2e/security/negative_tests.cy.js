describe('Negative & Security Tests', () => {
    beforeEach(() => {
        cy.visit('/contact_us');
    });

    it('Security: SQL Injection Attempt in Contact Form', () => {
        const maliciousInput = "' OR '1'='1";

        cy.get('[data-qa="name"]').type('Test User');
        cy.get('[data-qa="email"]').type('test@example.com');
        cy.get('[data-qa="subject"]').type('Security Test');
        cy.get('[data-qa="message"]').type(maliciousInput);
        cy.get('[data-qa="submit-button"]').click();

        // Assert that the application accepted it as text (sanitized) or rejected it, but NOT crashed or leaked DB info
        cy.on('window:confirm', () => true);
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        // If it showed a database error, that would be a failure.
    });

    it('Security: XSS Attempt in Contact Form', () => {
        const xssScript = '<script>alert("XSS")</script>';

        cy.get('[data-qa="name"]').type('Test User');
        cy.get('[data-qa="email"]').type('test@example.com');
        cy.get('[data-qa="subject"]').type('XSS Test');
        cy.get('[data-qa="message"]').type(xssScript);
        cy.get('[data-qa="submit-button"]').click();

        cy.on('window:confirm', () => true);
        // Verify script does not execute
        cy.on('window:alert', (str) => {
            expect(str).to.not.equal('XSS');
        });
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    });
});
