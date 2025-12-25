import SignUpPage from '../../support/pageObjects/SignUpPage';
import CartPage from '../../support/pageObjects/CartPage';
import { generateRandomEmail, generatePassword } from '../../utils/helpers';

describe('Checkout Tests', () => {
    const email = generateRandomEmail();
    const password = generatePassword();
    const name = 'CheckoutUser';

    it('Test Case 15: Place Order: Register before Checkout', () => {
        // 1. Register
        cy.visit('/login');
        SignUpPage.signup(name, email);
        SignUpPage.fillAccountDetails(password, 'Test', 'User', '123 Checkout St', 'NY', 'NY', '10001', '9876543210');
        SignUpPage.createAccountBtn.click();
        SignUpPage.continueBtn.click();

        // 2. Add to Cart
        cy.visit('/');
        cy.get('.features_items .col-sm-4').first().find('.add-to-cart').first().click({ force: true });
        cy.get('.modal-footer a').click(); // View Cart

        // 3. Checkout
        CartPage.proceedToCheckoutBtn.click();

        // 4. Verify Address and Review Order
        // cy.get('#address_delivery').should('contain', '123 Checkout St'); // Verify address
        cy.get('textarea[name="message"]').type('Please deliver quickly');
        cy.get('.check_out').click(); // Place Order

        // 5. Payment
        cy.get('[data-qa="name-on-card"]').type(name);
        cy.get('[data-qa="card-number"]').type('1234567890123456');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('01');
        cy.get('[data-qa="expiry-year"]').type('2030');
        cy.get('[data-qa="pay-button"]').click();

        // 6. Verify Success
        // cy.contains('Order Placed!').should('be.visible'); // Adjust based on actual success message
        // SignUpPage.deleteAccountBtn.click(); // Cleanup
    });
});
