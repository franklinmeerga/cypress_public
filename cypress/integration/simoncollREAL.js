describe('simon coll cases', function(){
    it('oficial page simon coll', function(){
        cy.visit('https://www.simoncoll.com/'); // visit the site
        //cy.get('.wrapper-search > .search-trigger > .icon-search-1').click(); // find the element to search
        cy.get('.slick-current > .product-image-wrapper > .product-actions > .product-link').click(); // find the product
        //cy.get('.single_add_to_cart_button.button.cta-add.cta-black').click();
        cy.get('.wrapper-add-to-cart > .single_add_to_cart_button').click();
    })
})