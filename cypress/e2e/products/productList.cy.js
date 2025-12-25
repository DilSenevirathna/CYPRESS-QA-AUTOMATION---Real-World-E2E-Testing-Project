import ProductPage from '../../support/pageObjects/ProductPage';
import { ROUTES } from '../../utils/constants';

describe('Product Catalog Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        cy.contains('Products').click();
        cy.url().should('include', ROUTES.PRODUCTS);
        cy.get('.title').should('contain', 'All Products');

        // Check product list is visible
        ProductPage.productsList.should('be.visible');

        // Click on View Product of first item
        ProductPage.viewProduct(0);

        // Verify product detail
        cy.url().should('include', '/product_details/');
        cy.get('.product-information').should('be.visible');
        cy.get('.product-information h2').should('be.visible'); // Product Name
        cy.get('.product-information p').should('contain', 'Category');
        cy.get('.product-information span span').should('contain', 'Rs.'); // Price
        cy.get('.product-information p').should('contain', 'Availability');
        cy.get('.product-information p').should('contain', 'Condition');
        cy.get('.product-information p').should('contain', 'Brand');
    });
});
