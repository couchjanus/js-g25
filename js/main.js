"use strict";

const navbarToggler = document.getElementById('navbar-toggler');

const modalWindow = document.querySelector(".modal-window");
const showCase = document.querySelector(".catalog");
const shoppingCartValue = document.getElementById('shopping-cart-value');
const wishListValue = document.getElementById('wish-list-value');

let cart = [];

class Store {
    static init(key) {
        let basket = [];
        try {
            basket = Store.isset(key) ? Store.get(key) : Store.set(key, []);
        } catch(err) {
            if (err === QUOTA_EXCEEDED_ERR) {
                console.log("Local Storage Limited is exceeded");
            }
        }
        return basket;
    }

    static set(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    static get(key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static isset(key) {
        return this.get(key) !== null;
    }
}

// console.log(typeof(cart))
// console.log('Empty cart=', cart)
// 



let productItemTemplate = product =>
    `<!-- PRODUCT-->
        <div class="col-lg-4 col-sm-6">
            <div class="product text-center">
                <div class="mb-3 position-relative">
                    <div class="badge text-white bg-${product.badge.bg}">${product.badge.title}</div>
                    <a class="d-block" href="detail.html"><img class="img-fluid w-100" src="${product.image}" alt="${product.title}"></a>
                    <div class="product-overlay">
                        <ul class="mb-0 list-inline btn-block" data-id="${product.id}" data-price="${product.price}">
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark add-to-wish-list" href="#!"><i class="far fa-heart"></i></a></li>
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark add-to-cart" href="#!">Add to cart</a></li>
                            <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark detail" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
                        </ul>
                    </div>
                </div>
                <h6> <a class="reset-anchor" href="detail.html">${product.title}</a></h6>
                <p class="small text-muted">$${product.price}</p>
            </div>
        </div>
    `;


function populateProductList(products) {
    
    let content = "";

    for (let item of products) {
        content += productItemTemplate(item);
    }

    return content;
}

let rating = stars => {
    let result = "";

    for (let i=0; i<stars; i++) {
        result += '<li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>';
    }

    for (let i=0; i<5-stars; i++) {
        result += '<li class="list-inline-item m-0"><i class="fas fa-star small"></i></li>';
    }
    return result;
}

let modalTemplate = product => `<div class="modal" id="productView" tabindex="-1">
<div class="modal-dialog">
  <div class="modal-content overflow-hidden border-0">
    <a href="#" class="p-4 close btn-close"><i class="fas fa-times"></i></a>
    
    <div class="modal-body p-0">
      <div class="row align-items-stretch">
        <div class="col-lg-6 p-lg-0">
          <div class="bg-center bg-cover d-block h-100" style="background: url(${product.image})">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-4 my-md-4">
            <ul class="list-inline mb-2">
              ${rating(product.stars)}
            </ul>
            <h2 class="h4">${product.title}</h2>
            <p class="text-muted">$${product.price}</p>
            <p class="text-sm mb-4">${product.description}</p>
            <div class="row align-items-stretch mb-4 gx-0">
              <div class="col-sm-7">
                <div class="border d-flex align-items-center justify-content-between py-1 px-3"><span class="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                  <div class="quantity">
                    <i class="fas fa-caret-left btn p-0 dec-btn"></i>
                    <input class="form-control border-0 shadow-0 p-0 quantity-result" type="text" value="1">
                    <i class="fas fa-caret-right btn p-0 inc-btn"></i>
                  </div>
                </div>
              </div>
              <div class="col-sm-5"><a class="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
            </div><a class="btn btn-link text-dark text-decoration-none p-0" href="#!"><i class="far fa-heart me-2"></i>Add to wish list</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;


function renderModal() {
    
    modalWindow.querySelector('.inc-btn').addEventListener('click', event => {
        let val = event.target.previousElementSibling.value;
        // console.log(event.target.previousElementSibling);
        val++;
        event.target.previousElementSibling.value = val;
    });

    modalWindow.querySelector('.dec-btn').addEventListener('click', event => {
        let val = event.target.nextElementSibling.value;
        if (val > 1) {
            val--;
        }
       
        event.target.nextElementSibling.value = val;
    });
}

function toggleModal(param, product={}) {
    if (modalWindow.innerHTML === '') {
        modalWindow.innerHTML = modalTemplate(product);
        renderModal();
    } else {
        modalWindow.innerHTML = '';
    }
    modalWindow.style.display = param;
}

// showCase

function detailButton(products) {
    let detailButtons = showCase.querySelectorAll(".detail");
    detailButtons.forEach(button => {
        
        button.addEventListener('click', event => {
            let productId = event.target.closest('.btn-block').dataset.id;
            console.log(productId);
            let product = products.find(product => product.id == productId);
            toggleModal('block', product);
            modalWindow.querySelector('.close').addEventListener('click', event => {
                event.preventDefault();
                toggleModal('none');
            })
        });
    });
}

function saveCart(cart) {
    Store.set('basket', cart);
}

function addProductToCart(product, amount=1){
    let cartItem = {...product, amount: amount};
    cart = [...cart, cartItem];
    saveCart(cart);
}

function addToCartButton(cart) {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((element) => {
        element.addEventListener('click', (event) => {
            let productId = event.target.closest('.btn-block').dataset.id;
            let price = event.target.closest('.btn-block').dataset.price;

            addProductToCart({id: productId, price:price});

            shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
            shoppingCartValue.classList.add('fw-bold');
            shoppingCartValue.style = "color:red;";
           
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {

    cart = Store.init('basket');

    // console.log(cart);

    navbarToggler.addEventListener('click', function(){
        document.querySelector('.collapse').classList.toggle('show');
    });

    
    // console.log('products', products);
    document.querySelector(".catalog").innerHTML = populateProductList(products);

    // 
    addToCartButton(cart);

    let addToWishListButtons = document.querySelectorAll('.add-to-wish-list');
    // let addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToWishListButtons) {
        addToWishListButtons.forEach(function(element){
            
            element.addEventListener('click', function() {
                wishListValue.textContent = +wishListValue.textContent + 1;
                wishListValue.classList.add('fw-bold');
                wishListValue.style = "color:red;";
            });
        });    
    }

    // if (addToCartButtons) {
    //     addToCartButtons.forEach(function(element){
    //         element.addEventListener('click', function() {
    //             shoppingCartValue.textContent = +shoppingCartValue.textContent + 1;
    //             shoppingCartValue.classList.add('fw-bold');
    //             shoppingCartValue.style = "color:red;";
    //             cart[0] = {title:'title', price:123};
    //             console.log('cart item=', cart)
    //         });
    //     });
    // }

    detailButton(products);

});
