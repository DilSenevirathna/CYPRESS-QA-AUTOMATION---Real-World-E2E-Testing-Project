import ProductPage from '../../support/pageObjects/ProductPage';
import CartPage from '../../support/pageObjects/CartPage';

describe('Cart Management Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Test Case 12: Add Products in Cart', () => {
        // Add first product
        cy.get('.features_items .col-sm-4').first().as('firstProduct');
        cy.get('@firstProduct').find('.add-to-cart').first().click({ force: true }); // Force because of hover effect usually
        cy.get('.modal-body').should('contain', 'Your product has been added to cart.');
        cy.get('.modal-footer button').click(); // Continue Shopping

        // Add second product
        cy.get('.features_items .col-sm-4').eq(1).as('secondProduct');
        cy.get('@secondProduct').find('.add-to-cart').first().click({ force: true });
        cy.get('.modal-body').should('contain', 'Your product has been added to cart.');
        cy.get('.modal-footer a').click(); // View Cart

        // Verify Cart
        cy.url().should('include', '/view_cart');
        cy.get('#cart_info_table tbody tr').should('have.length', 2);
    });
});
