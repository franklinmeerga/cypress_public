class CategoryElements1 {
  botaocategory = () => { return '#menu-item-ammo > .vtex-menu-2-x-styledLinkContent' } // category

  nomecategoria = () => { return '.vtex-search-result-3-x-galleryTitle--layout' } // name category

  botoncooke = () => { return '#cookiescript_accept' }
}

class SelectProduct1 {
  urlcategory = () => { return 'https://www.deguns.net/ammo' }
  
  botaoproducto = () => { return ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .deguns-deguns-seller-offer-0-x-addToCartWrapper > #addToCartButton > .vtex-button > .vtex-button__label' } // product 1

  validarnomeprodutominicart = () => { return '#name-22689' } // validar nome do produto em minicart
}

export default CategoryElements1; SelectProduct1;