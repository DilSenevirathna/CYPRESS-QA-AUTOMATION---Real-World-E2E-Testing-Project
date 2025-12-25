import { API_ENDPOINTS } from '../utils/constants';

describe('API Tests - Products', () => {
    it('GET All Products List', () => {
        cy.request('GET', API_ENDPOINTS.PRODUCTS).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('products');
            expect(response.body.products).to.be.an('array');
            JSON.parse(response.body).products.forEach(product => {
                expect(product).to.have.property('id');
                expect(product).to.have.property('name');
                expect(product).to.have.property('price');
            });
        });
    });

    it('POST Search Product', () => {
        cy.request({
            method: 'POST',
            url: API_ENDPOINTS.SEARCH_PRODUCT,
            form: true, // Depending on API type
            body: {
                search_product: 'tshirt'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(JSON.parse(response.body)).to.have.property('products');
        });
    });
});
