import Chainable = Cypress.Chainable;

class ShadowDom {

    getShadowRoot(): Chainable {
        return cy.get('guid-generator').shadow();
    }

    generateUID(){
        this.getShadowRoot().find('#buttonGenerate').click();
        cy.wait(2000);
    }
}

export const shadowDom = new ShadowDom();
