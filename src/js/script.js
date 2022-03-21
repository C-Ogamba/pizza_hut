"use strict";

// const cartBtn = document.querySelector(".cart-btn");
// const closeCartBtn = document.querySelector(".close-cart");
// const clearCartBtn = document.querySelector(".clear-cart");
// const cartDOM = document.querySelector(".cart");
// const cartOverlay = document.querySelector(".cart-overlay");
// const cartItems = document.querySelector(".cart-items");
// const cartTotal = document.querySelector(".cart-total");
// const cartContent = document.querySelector(".cart-content");
// const productsDOM = document.querySelector(".product-center");
// const getOrder = document.querySelector(".data");
// const orderNumber = document.querySelector(".number");
// const pizzaSize = document.querySelector(".size");
// const pizzaType = document.querySelector(".type");
// const pizzaToppings = document.querySelector(".toppings");
// const pizzaTotal = document.querySelector(".total");
// const getTotal = document.querySelector(".order");
// const addOrder = document.querySelector(".checkout");



$(".order").click(function () {
  let sizeOfPizza = $(".size option:selected").val();
  let toppings = $(".toppings option:selected").val();
  let crustType = $(".crust-type option:selected").val();
  console.log(sizeOfPizza);
  let order = new Pizza(sizeOfPizza, toppings, crustType);
  console.log(order);
});
 
// function constructor
function Pizza(size, topps, crust) {
  this.size = size;
  this.topps = topps;
  this.crust = crust;

  // method to return all pizza details
  function getDetails() {
    return `size: ${this.size}, toppings: ${this.topps}, choice of crust: ${this.crust}`;
  }
}







// const size = {
//   small: 300,
//   medium: 450,
//   large: 550,
// };
// const topping = {
//   pineapples: 200,
//   mushrooms: 200,
//   olives: 250,
// };
// const type = {
//   rispy: 300,
//   stuffed: 450,
//   glutenFree: 500,
// };
// getTotal.addEventListener("click", function () {
//   getOrder.classList.add("random");
//   buildPizza();
// });
// function buildPizza() {
//   let pizzaGenerator = document.querySelector("#pizza-size").value;
//   let typeToppings = document.querySelector("#pizza-toppings").value;
//   let typeCrust = document.querySelector("#pizza-crust").value;
//   //   console.log(pizzaGenerator)
//   if (
//     pizzaGenerator === "small" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.small + topping.pineapples + type.stuffed;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.small + topping.mushrooms + type.stuffed;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "olives" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.small + topping.olives + type.stuffed;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.small + topping.pineapples + type.rispy;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.small + topping.mushrooms + type.rispy;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "olives" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.small + topping.olives + type.rispy;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.small + topping.mushrooms + type.glutenFree;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.small + topping.pineapples + type.glutenFree;
//   } else if (
//     pizzaGenerator === "small" &&
//     typeToppings === "olives" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `small-${size.small}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.small + topping.olives + type.glutenFree;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.medium + topping.mushrooms + type.stuffed;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "pineapple" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `pineapple-${topping.pineapple}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.medium + topping.pineapple + type.stuffed;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "olives" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.medium + topping.olives + type.stuffed;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.medium + topping.mushrooms + type.rispy;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.medium + topping.pineapples + type.rispy;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "olives" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.medium + topping.olives + type.rispy;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.medium + topping.mushrooms + type.glutenFree;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText =
//       size.medium + topping.pineapples + type.glutenFree;
//   } else if (
//     pizzaGenerator === "medium" &&
//     typeToppings === "olives" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1),
//       (pizzaSize.innerText = `medium-${size.medium}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.medium + topping.olives + type.glutenFree;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.large + topping.mushrooms + type.stuffed;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "pineapple" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `pineapple-${topping.pineapple}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.large + topping.pineapple + type.stuffed;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "olives" &&
//     typeCrust === "stuffed"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `stuffed-${type.stuffed}`;
//     pizzaTotal.innerText = size.large + topping.olives + type.stuffed;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.large + topping.mushrooms + type.rispy;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.large + topping.pineapples + type.rispy;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "olives" &&
//     typeCrust === "rispy"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `rispy-${type.rispy}`;
//     pizzaTotal.innerText = size.large + topping.olives + type.rispy;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "mushrooms" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `mushrooms-${topping.mushrooms}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.large + topping.mushrooms + type.glutenFree;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "pineapples" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `pineapples-${topping.pineapples}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.large + topping.pineapples + type.glutenFree;
//   } else if (
//     pizzaGenerator === "large" &&
//     typeToppings === "olives" &&
//     typeCrust === "glutenFree"
//   ) {
//     (orderNumber.innerText = 1), (pizzaSize.innerText = `large-${size.large}`);
//     pizzaToppings.innerText = `olives-${topping.olives}`;
//     pizzaType.innerText = `glutenFree-${type.glutenFree}`;
//     pizzaTotal.innerText = size.large + topping.olives + type.glutenFree;
//   }
// }
// addOrder.addEventListener("click", function () {

// })

// let cart = [];

// // getting the products
// class Products {
//   getProducts() {
//     fetch("prodc");
//   }
// }
// //  dispaly products
// class UI {}
// // local storage
// class Storage {}

// document.addEventListener("DOMContentLoaded", () => {
//   const ui = new UI();
//   const products = new Products();
// });
