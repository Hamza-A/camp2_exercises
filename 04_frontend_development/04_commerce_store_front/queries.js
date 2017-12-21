const fetch = require("node-fetch");


function getCategories(){
  return fetch("https://decath-product-api.herokuapp.com/categories/")
    .then((response) => response.json());
}

function getProducts(categorie){
  return fetch(`https://decath-product-api.herokuapp.com/categories/${categorie}/products`)
    .then((response) => response.json());
}

function getDetails(product){
  return fetch(`https://decath-product-api.herokuapp.com/products/${product}`)
    .then((response) => response.json());
}

module.exports= {
  getCategories: getCategories,
  getProducts: getProducts,
  getDetails: getDetails
}
