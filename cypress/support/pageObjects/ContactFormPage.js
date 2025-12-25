class ContactFormPage {
    visit() {
        cy.visit('/contact_us');
    }

    get nameInput() { return cy.get('[data-qa="name"]'); }
    get emailInput() { return cy.get('[data-qa="email"]'); }
    get subjectInput() { return cy.get('[data-qa="subject"]'); }
    get messageInput() { return cy.get('[data-qa="message"]'); }
    get uploadFile() { return cy.get('input[name="upload_file"]'); }
    get submitBtn() { return cy.get('[data-qa="submit-button"]'); }

    submitForm(name, email, subject, message, filePath) {
        this.nameInput.type(name);
        this.emailInput.type(email);
        this.subjectInput.type(subject);
        this.messageInput.type(message);
        if (filePath) {
            this.uploadFile.selectFile(filePath);
        }
        this.submitBtn.click();
    }
}

export default new ContactFormPage();
