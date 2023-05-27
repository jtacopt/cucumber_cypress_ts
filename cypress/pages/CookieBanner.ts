class CookieBanner{

    acceptCookie(){
        cy.get('cmm-cookie-banner').shadow()
            .find('cmm-buttons-wrapper .wb-button--accept-all')
            .click();
    }
}

export const cookieBanner = new CookieBanner();
