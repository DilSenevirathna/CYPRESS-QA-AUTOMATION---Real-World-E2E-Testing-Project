class ProductPage {
    get productsList() { return cy.get('.features_items'); }
    get searchInput() { return cy.get('#search_product'); }
    get searchBtn() { return cy.get('#submit_search'); }

    visit() {
        cy.visit('/products');
    }

    searchProduct(productName) {
        this.searchInput.type(productName);
        this.searchBtn.click();
    }

    viewProduct(index = 0) {
        cy.get('.choose a').eq(index).click();
    }
}

export default new ProductPage();
