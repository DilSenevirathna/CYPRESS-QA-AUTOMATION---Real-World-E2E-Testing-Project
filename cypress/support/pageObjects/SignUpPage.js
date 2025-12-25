class SignUpPage {
    get namesInput() { return cy.get('[data-qa="signup-name"]'); }
    get emailInput() { return cy.get('[data-qa="signup-email"]'); }
    get signupBtn() { return cy.get('[data-qa="signup-button"]'); }
    get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
    get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
    get loginBtn() { return cy.get('[data-qa="login-button"]'); }

    // Account Information
    get genderMr() { return cy.get('#id_gender1'); }
    get passwordInput() { return cy.get('[data-qa="password"]'); }
    get daysParams() { return cy.get('[data-qa="days"]'); }
    get monthsParams() { return cy.get('[data-qa="months"]'); }
    get yearsParams() { return cy.get('[data-qa="years"]'); }

    get firstName() { return cy.get('[data-qa="first_name"]'); }
    get lastName() { return cy.get('[data-qa="last_name"]'); }
    get address1() { return cy.get('[data-qa="address"]'); }
    get country() { return cy.get('[data-qa="country"]'); }
    get state() { return cy.get('[data-qa="state"]'); }
    get city() { return cy.get('[data-qa="city"]'); }
    get zipcode() { return cy.get('[data-qa="zipcode"]'); }
    get mobileNumber() { return cy.get('[data-qa="mobile_number"]'); }
    get createAccountBtn() { return cy.get('[data-qa="create-account"]'); }
    get continueBtn() { return cy.get('[data-qa="continue-button"]'); }
    get deleteAccountBtn() { return cy.get('[href="/delete_account"]'); }

    signup(name, email) {
        this.namesInput.type(name);
        this.emailInput.type(email);
        this.signupBtn.click();
    }

    fillAccountDetails(password, firstName, lastName, address, state, city, zip, mobile) {
        this.genderMr.click();
        this.passwordInput.type(password);
        this.daysParams.select('1');
        this.monthsParams.select('January');
        this.yearsParams.select('2000');
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.address1.type(address);
        this.country.select('Inputia'); // Placeholder, adjust as real options
        this.state.type(state);
        this.city.type(city);
        this.zipcode.type(zip);
        this.mobileNumber.type(mobile);
    }
}

export default new SignUpPage();
