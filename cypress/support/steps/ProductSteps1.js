/* global Given, Then, When */

import CategoryPage1 from '../pageobjects/CategoryPage1'
//import SelectProductPage1 from '../pageobjects/CategoryPage1'

import SelectProductPage1 from '../pageobjects/SelectProductPage1'

const categorypage1 = new CategoryPage1
const selectproductpage1 = new SelectProductPage1



// cases 2
Given("estou no site de categoria desejada", () => {
    selectproductpage1.acessarSite();
})

When("clicar no boton do produto", () => {
    selectproductpage1.clicarbotaoproduto();
})

Then("deve aparecer o produto no minicart", () => {
    selectproductpage1.validarprodutominicart();
})