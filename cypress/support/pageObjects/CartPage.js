class CartPage {
    visit() {
        cy.visit('/view_cart');
    }

    get cartItems() { return cy.get('#cart_info_table tbody tr'); }
    get proceedToCheckoutBtn() { return cy.get('.check_out'); }

    verifyProductInCart(productName) {
        this.cartItems.should('contain', productName);
    }
}

export default new CartPage();
