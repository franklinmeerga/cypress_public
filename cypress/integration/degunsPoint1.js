describe('simon coll cases', function(){
    it('oficial page simon coll', function(){
        cy.visit('https://www.deguns.net/'); // visit the site
        cy.get('#menu-item-ammo > .vtex-menu-2-x-styledLinkContent').click(); // category
        cy.get('.vtex-search-result-3-x-galleryTitle--layout').should('contain', 'Ammo'); // validate category
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .deguns-deguns-seller-offer-0-x-addToCartWrapper > #addToCartButton > .vtex-button > .vtex-button__label').click(); // product
        cy.get('#name-22689').should('contain', 'HORNADY 5.56 NATO 62 gr FMJ Frontier 20Box'); // validate product in minicart
        cy.get('#cookiescript_accept').click();
        
        cy.get('#proceed-to-checkout').click();
        cy.get('#cart-to-orderform').click();
        cy.get('#client-email').type('franklin.garcia@acct.global');
        cy.get('#client-first-name').type('Franklin');
        cy.get('#client-last-name').type('Garcia');
        cy.get('#client-phone').type('12345617891');
        cy.get('#go-to-shipping').click();
        //cy.get('.help').should('contain', 'Enter a valid phone number, please.');
        
        cy.get('#ship-postalCode').type('10001');
        cy.get('#ship-street').type('address 1');
        cy.get('#ship-complement').type('address 2');

        cy.get('#btn-go-to-payment').click();
    })
})