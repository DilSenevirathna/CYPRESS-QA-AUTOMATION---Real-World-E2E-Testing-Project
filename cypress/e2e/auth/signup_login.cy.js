import SignUpPage from '../../support/pageObjects/SignUpPage';
import LoginPage from '../../support/pageObjects/LoginPage';
import { generateRandomEmail, generatePassword } from '../../utils/helpers';
import { ROUTES, MESSAGES } from '../../utils/constants';

describe('Authentication Tests', () => {
    const email = generateRandomEmail();
    const password = generatePassword();
    const name = 'TestUser';

    beforeEach(() => {
        cy.visit('/login');
    });

    it('Test Case 1: Register User', () => {
        SignUpPage.signup(name, email);
        cy.contains('Enter Account Information').should('be.visible');

        SignUpPage.fillAccountDetails(password, 'Test', 'User', '123 Main St', 'New York', 'NY', '10001', '1234567890');
        SignUpPage.createAccountBtn.click();

        cy.contains(MESSAGES.ACCOUNT_CREATED).should('be.visible');
        SignUpPage.continueBtn.click();

        cy.contains(`${MESSAGES.LOGIN_SUCCESS} ${name}`).should('be.visible');

        // Cleanup
        SignUpPage.deleteAccountBtn.click();
        cy.contains(MESSAGES.ACCOUNT_DELETED).should('be.visible');
    });

    it('Test Case 2: Login User with correct email and password', () => {
        // Note: This relies on a pre-existing user or creating one. 
        // Ideally, for isolation, we create a user via API before this test.
        // For now, I will simulate the flow by re-registering or assuming data usage strategy.
        // Better strategy: Register -> Logout -> Login -> Delete

        const loginEmail = generateRandomEmail();

        // Pre-requisite: Create user
        SignUpPage.signup(name, loginEmail);
        SignUpPage.fillAccountDetails(password, 'Test', 'User', '123 St', 'State', 'City', '000', '123456');
        SignUpPage.createAccountBtn.click();
        SignUpPage.continueBtn.click();
        LoginPage.logout();

        // Actual Login Test
        LoginPage.login(loginEmail, password);
        cy.contains(`${MESSAGES.LOGIN_SUCCESS} ${name}`).should('be.visible');

        // Cleanup
        SignUpPage.deleteAccountBtn.click();
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        LoginPage.login('wrong@email.com', 'wrongpassword');
        cy.contains('incorrect email or password').should('be.visible'); // Verify actual error message
    });
});
