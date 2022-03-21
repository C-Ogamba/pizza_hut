"use strict";

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".product-center");
const getOrder = document.querySelector(".data");
const orderNumber = document.querySelector(".number");
const pizzaSize = document.querySelector(".size");
const pizzaType = document.querySelector(".type");
const pizzaToppings = document.querySelector(".toppings");
const pizzaTotal = document.querySelector(".total");
const getTotal = document.querySelector(".order");
getTotal.addEventListener("click", function () {
  buildPizza();
  getOrder.classList.add("random");
});
function buildPizza() {
  let pizzaGenerator = document.querySelector("#pizza-size").value;
  let typeToppings = document.querySelector("#pizza-toppings").value;
  let typeCrust = document.querySelector("#pizza-crust").value;
}

let cart = [];

// getting the products
class Products {
  getProducts() {
    fetch("prodc");
  }
}
//  dispaly products
class UI {}
// local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
});
