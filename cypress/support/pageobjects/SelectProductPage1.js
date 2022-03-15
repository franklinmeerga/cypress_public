/// <reference types="Cypress" />

import SelectProductElement1 from '../elements/SelectProductElement1'

const selectproductelement1 = SelectProductElement1

const urlproduct = Cypress.config("baseUrl2")



class SelectProductPage1 {

    // Acessa o site que será testado
    site() {
        cy.visit('https://www.deguns.net/ammo')
    }

    // Acessa o site que será testado
    acessarSite() {
        cy.visit(urlproduct)
    }

    // Clica no botão que acessa a página de login do site
    clicarbotaoproduto() {
        cy.get(selectproductelement1.botaoproducto()).click()
        
    }

    // nome categoria e validar
    validarprodutominicart() {
        //cy.get(selectproductelement1.validarnomeprodutominicart()).should('contain', 'HORNADY 5.56 NATO 62 gr FMJ Frontier 20Box'); // validate product in minicart
        cy.get(selectproductelement1.validarnomeprodutominicart()).should('contain', 'HORNADY 5.56 NATO 62 gr FMJ Frontier 20Box'); // validate product in minicart
    }
}

export default SelectProductPage1;