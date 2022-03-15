describe('simon coll cases', function(){
    it('oficial page simon coll', function(){
        cy.visit('https://www.deguns.net/'); // visit the site
        cy.get('#downshift-0-input').type('HORNADY 5.56 NATO 62 gr FMJ Frontier 20Box').click();
        //cy.get('').click();
    })
})