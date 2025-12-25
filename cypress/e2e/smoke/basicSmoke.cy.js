import SignUpPage from '../../support/pageObjects/SignUpPage';
import ProductPage from '../../support/pageObjects/ProductPage';
import CartPage from '../../support/pageObjects/CartPage';

describe('Smoke Suite', { tags: '@smoke' }, () => {
    it('Critical Flow: Login -> Search -> Add to Cart -> Checkout', () => {
        // 1. Visit
        cy.visit('/');

        // 2. Search
        ProductPage.visit();
        ProductPage.searchProduct('Tshirt');

        // 3. Add to User Cart check
        cy.get('.features_items .col-sm-4').first().find('.add-to-cart').first().click({ force: true });
        cy.get('.modal-footer a').click();

        // 4. Verify Cart
        CartPage.verifyProductInCart('Tshirt');

        // 5. Checkout click
        CartPage.proceedToCheckoutBtn.click();

        // 6. Should be redirected to Login/Register Modal or Page if not logged in
        cy.get('.modal-body').should('contain', 'Register / Login account to proceed on checkout.');
    });
});
