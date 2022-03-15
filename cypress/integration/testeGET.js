describe('serch test cases', function(){
    it('serch with results', function(){
        //cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://simoncoll.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=%2F%3F&__bindingAddress=www.simoncoll.com/es'); // serch the website
        cy.get('#email').type('franklin.garcia@acct.global'); // put the email adress
        cy.get('.vtex-button__label').click();
    })
})