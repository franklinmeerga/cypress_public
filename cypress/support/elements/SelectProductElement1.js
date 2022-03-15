class SelectProductElement1 {
  urlcategory = () => { return 'https://www.deguns.net/ammo' }
  
  botaoproducto1 = () => { return ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .deguns-deguns-seller-offer-0-x-addToCartWrapper > #addToCartButton > .vtex-button > .vtex-button__label' } // product 1

  validarnomeproduto1minicart = () => { return '#name-22689' } // validar nome do produto em minicart
}

export default  SelectProductElement1;