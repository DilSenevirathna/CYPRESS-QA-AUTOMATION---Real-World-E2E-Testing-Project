class LoginPage {
    get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
    get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
    get loginBtn() { return cy.get('[data-qa="login-button"]'); }
    get logoutBtn() { return cy.get('[href="/logout"]'); }

    login(email, password) {
        this.loginEmailInput.type(email);
        this.loginPasswordInput.type(password);
        this.loginBtn.click();
    }

    logout() {
        this.logoutBtn.click();
    }
}

export default new LoginPage();
