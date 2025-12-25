# Cypress QA Project - AutomationExercise.com

This is a comprehensive Cypress automation framework covering UI, API, Integration, and Security tests for [AutomationExercise.com](https://automationexercise.com/).

## 🚀 Features

- **UI Automation**: Authentication, Product Catalog, Cart, Checkout, Forms.
- **API Automation**: Products, User verification.
- **Integration**: API + UI integration tests.
- **Negative & Security**: SQL Injection, XSS, Network failures.
- **Page Object Model (POM)**: Modular and reusable code.
- **Reporting**: Mochawesome HTML reports.
- **CI/CD**: GitHub Actions configuration.

## 📂 Folder Structure

```
cypress/
├── e2e/              # Test Spec Files
│   ├── auth/         # Login, Signup
│   ├── products/     # Product List, Search
│   ├── cart/         # Add to Cart, Checkout
│   ├── forms/        # Contact Us
│   ├── navigation/   # Navigation
│   ├── smoke/        # Critical Flows
│   └── security/     # Negative Tests
├── api/              # API Tests
├── fixtures/         # Test Data
├── support/          # Commands & E2E Config
│   └── pageObjects/  # Page Object Models
└── utils/            # Helpers & Constants
```

## 🛠️ Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Open Cypress Test Runner**
   ```bash
   npx cypress open
   ```

3. **Run All Tests Headless**
   ```bash
   npx cypress run
   ```

4. **Run Specific Spec**
   ```bash
   npx cypress run --spec "cypress/e2e/auth/login.cy.js"
   ```

## 📊 Reporting

Reports are generated using Mochawesome.
To run tests and generate a merged HTML report:

```bash
npm run test:report
```

Check `cypress/reports` for the generated HTML file.

## 🤖 CI/CD

The project includes a GitHub Actions workflow `.github/workflows/main.yml` that runs tests on every push.
