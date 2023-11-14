# Cypress Cucumber Typescript

This project demonstrates how to set up Cypress tests with TypeScript and integrate them with Sauce Labs for cross-browser testing.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/cypress-typescript-saucelabs.git
    ```

2. Navigate to the project directory:

    ```bash
    cd cypress-typescript-saucelabs
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Configuration

### Sauce Labs Setup

1. Obtain your Sauce Labs credentials (username and access key).

2. Set the following environment variables:

    ```bash
    export SAUCE_USERNAME=your_sauce_username
    export SAUCE_ACCESS_KEY=your_sauce_access_key
    ```

### Cypress Configuration

Cypress configuration is located in `cypress.json`. Update the configurations as needed for your project.

## Running Tests

### Locally

To run tests locally, use the following command:

```bash
make test-local