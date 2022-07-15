"use strict";

let products = [
    {
        badge:  {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-1.37a0a89c.jpg",
        title: "Kui Ye Chen’s AirPods",
        price: 250,

    },
    {
        badge:  {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-2.1adefbd6.jpg",
        title: "Air Jordan 12 gym red",
        price: 300,

    },
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-3.e4af5b82.jpg",
        title: "Cyan cotton t-shirt",
        price: 30,

    },
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-4.719c3a60.jpg",
        title: "Timex Unisex Originals",
        price: 350,

    },  
    {
        badge: {
            title: "Sale",
            bg: "sale"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-5.aff049a7.jpg",
        title: "Red digital smartwatch",
        price: 150,

    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-6.c4210d28.jpg",
        title: "Nike air max 95",
        price: 250,

    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-7.1f4b5e9b.jpg",
        title: "Joemalone Women prefume",
        price: 25,

    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-8.d7432880.jpg",
        title: "Apple Watch",
        price: 350,

    },  
    {
        badge: {
            title: "Sold",
            bg: "sold"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-9.7bc0d11d.jpg",
        title: "Men silver Byron Watch",
        price: 351,

    },  
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-10.a2749b0f.jpg",
        title: "Ploaroid one step camera",
        price: 451,

    },  

    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-11.0e27b424.jpg",
        title: "Gray Nike running shoes",
        price: 151,

    },  

    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-12.1f20a117.jpg",
        title: "Black DSLR lense",
        price: 51,

    },  

];

const navbarToggler = document.getElementById('navbar-toggler');

// console.log(navbarToggler);
console.log(document.querySelector('.collapse'));
navbarToggler.addEventListener('click', function(){
    document.querySelector('.collapse').classList.toggle('show');
});

function productItemTemplate(product) {
    return `<!-- PRODUCT-->
        <div class="col-lg-4 col-sm-6">
                    <div class="product text-center">
                      <div class="mb-3 position-relative">
                        <div class="badge text-white bg-${product.badge.bg}">${product.badge.title}</div><a class="d-block" href="detail.html"><img class="img-fluid w-100" src="${product.image}" alt="${product.title}"></a>
                        <div class="product-overlay">
                          <ul class="mb-0 list-inline">
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark add-to-wish-list" href="#!"><i class="far fa-heart"></i></a></li>
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark add-to-cart" href="#!">Add to cart</a></li>
                            <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a class="reset-anchor" href="detail.html">${product.title}</a></h6>
                      <p class="small text-muted">$${product.price}</p>
                    </div>
                  </div>
    `;
}

function populateProductList(products) {
    
    let content = "";

    for (let item of products) {
        content += productItemTemplate(item);
    }

    return content;
}


// console.log(populateProductList(products));

const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');


document.querySelector(".catalog").innerHTML = populateProductList(products);

let addToWishListButtons = document.querySelectorAll('.add-to-wish-list');
let addToCartButtons = document.querySelectorAll('.add-to-cart');
// console.log(addToWishListButtons);
if (addToWishListButtons) {
    addToWishListButtons.forEach(function(element){
        // console.log(element);
        element.addEventListener('click', function() {
            wishListValue.textContent = +wishListValue.textContent + 1;
            wishListValue.classList.add('fw-bold');
            wishListValue.style = "color:red;";
        });
    });    
}

if (addToCartButtons) {
    addToCartButtons.forEach(function(element){
        element.addEventListener('click', function() {
            shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
            shoppingCartValue.classList.add('fw-bold');
            shoppingCartValue.style = "color:red;";
        });
    });
}




