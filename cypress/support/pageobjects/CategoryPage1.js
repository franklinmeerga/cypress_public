/// <reference types="Cypress" />

import CategoryElements1 from '../elements/CategoryElements1'
import SelectProduct1 from '../elements/CategoryElements1'

const categoryelements1 = new CategoryElements1
const selectproduct1 = SelectProduct1

const url = Cypress.config("baseUrl")
const urlproduct = Cypress.config("baseUrl2")

class CategoryPage1 {

    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoCategoria() {
        //cy.get(LoginElements1.botaoLogin()).click()
        cy.get(categoryelements1.botaocategory()).click()
    }

    // nome categoria e validar
    validarcategoria() {
        cy.get(categoryelements1.nomecategoria()).should('contain', 'Ammo') // validate category
    }
    
}

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
        cy.get(selectproduct1.botaoproducto())
    }

    // nome categoria e validar
    validarprodutominicart() {
        cy.get(selectproduct1.validarnomeprodutominicart()).should('contain', 'HORNADY 5.56 NATO 62 gr FMJ Frontier 20Box'); // validate product in minicart
    }
}

export default CategoryPage1; SelectProductPage1;
