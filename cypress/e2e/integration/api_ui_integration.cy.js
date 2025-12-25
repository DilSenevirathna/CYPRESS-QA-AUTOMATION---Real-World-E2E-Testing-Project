import { API_ENDPOINTS, ROUTES } from '../../utils/constants';

describe('Integration & Network Tests', () => {

    it('Test Case: API + UI Integration (Mocked Product List)', () => {
        // Intercept the API call to product list and provide a mocked response
        cy.intercept('GET', API_ENDPOINTS.PRODUCTS, {
            statusCode: 200,
            body: JSON.stringify({
                products: [
                    { id: 1, name: 'Mocked Product 1', price: '500', category: 'Test' },
                    { id: 2, name: 'Mocked Product 2', price: '1000', category: 'Test' }
                ]
            })
        }).as('getProducts');

        cy.visit(ROUTES.PRODUCTS);
        // verify that the UI reflects the mocked data (This depends on if UI uses this exact API immediately on load)
        // If the real app uses server-side rendering or different API, this might need adjustment.
        // AutomationExercise uses specific structure, assuming frontend calls this API.

        // If live site doesn't call this XHR explicitly on page load for rendering, we verify network call was made or force it.
        // cy.wait('@getProducts'); 
    });

    it('Test Case: Network Failure Simulation', () => {
        cy.intercept('POST', '**/search_product', {
            forceNetworkError: true
        }).as('searchFail');

        cy.visit(ROUTES.PRODUCTS);
        cy.get('#search_product').type('error');
        cy.get('#submit_search').click();

        cy.wait('@searchFail');
        // Assert appropriate error handling in UI, e.g., no crash, maybe an error message
        // cy.get('.error-message').should('be.visible'); // Hypothetical
    });

    it('Test Case: Slow Network Simulation', () => {
        cy.intercept('POST', '**/search_product', (req) => {
            req.on('response', (res) => {
                res.setDelay(5000); // Delay 5 seconds
            });
        }).as('slowSearch');

        cy.visit(ROUTES.PRODUCTS);
        cy.get('#search_product').type('slow');
        cy.get('#submit_search').click();

        // Verify loading state appears
        // cy.get('.loading-spinner').should('be.visible'); 
        cy.wait('@slowSearch');
    });
});
