import {Before, Given} from "cypress-cucumber-preprocessor/steps";
import {cookieBanner} from "../../pages/CookieBanner";

Before(() => {
  cy.log("Login Tests - Started");
  cy.visit('/en-au/shop/vehicle/srp/demo');
});

Given(/I pass/, () => {
  cookieBanner.acceptCookie();
});
