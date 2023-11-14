import {Before, Given} from "cypress-cucumber-preprocessor/steps";
import {shadowDom} from "../../pages/ShadowDom";

Before(() => {
  cy.log("Login Tests - Started");
  cy.visit('/shadowdom');
});

Given(/Generate GUID/, () => {
  shadowDom.generateUID();
});
