"use strict";

const navbarToggler = document.getElementById('navbar-toggler');

// console.log(navbarToggler);
console.log(document.querySelector('.collapse'));
navbarToggler.addEventListener('click', function(){
    document.querySelector('.collapse').classList.toggle('show');
});

const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');

let addToWishList = document.querySelector('.add-to-wish-list');
let addToCart = document.querySelector('.add-to-cart');

if (addToWishList) {
    addToWishList.addEventListener('click', function() {
        wishListValue.textContent = +wishListValue.textContent + 1;
        wishListValue.classList.add('fw-bold');
        wishListValue.style = "color:red;";
    });
}

if (addToCart) {
    addToCart.addEventListener('click', function() {
        shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
        shoppingCartValue.classList.add('fw-bold');
        shoppingCartValue.style = "color:red;";
    });
}
// let obj = {
//     "name foo": "My Name",
//     price: 123.00
// };

// function test(x, y) {
//     return x + y;
// }

// console.log(obj["name foo"]);
// obj.price = 222;
// console.log(obj["price"]);
// console.log(typeof(test));

// console.log(test);



