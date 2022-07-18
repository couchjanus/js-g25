// "use strict";
let products = [
    {
        badge:  {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-1.37a0a89c.jpg",
        title: "Kui Ye Chen’s AirPods",
        price: 250,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 3,
        id: 1,
    },
    {
        badge:  {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-2.1adefbd6.jpg",
        title: "Air Jordan 12 gym red",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 0,
        id: 2,

    },
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-3.e4af5b82.jpg",
        title: "Cyan cotton t-shirt",
        price: 30,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 2,
        id: 3,
    },
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-4.719c3a60.jpg",
        title: "Timex Unisex Originals",
        price: 350,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 5,
        id: 4,
    },  
    {
        badge: {
            title: "Sale",
            bg: "sale"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-5.aff049a7.jpg",
        title: "Red digital smartwatch",
        price: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 1,
        id: 5,
    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-6.c4210d28.jpg",
        title: "Nike air max 95",
        price: 250,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 5,
        id: 6,
    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-7.1f4b5e9b.jpg",
        title: "Joemalone Women prefume",
        price: 25,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 4,
        id: 7,
    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-8.d7432880.jpg",
        title: "Apple Watch",
        price: 350,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 5,
        id: 8,
    },  
    {
        badge: {
            title: "Sold",
            bg: "sold"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-9.7bc0d11d.jpg",
        title: "Men silver Byron Watch",
        price: 351,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 3,
        id: 9,
    },  
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-10.a2749b0f.jpg",
        title: "Ploaroid one step camera",
        price: 451,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 0,
        id: 10,
    },  

    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-11.0e27b424.jpg",
        title: "Gray Nike running shoes",
        price: 151,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 2,
        id: 11,
    },  

    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-12.1f20a117.jpg",
        title: "Black DSLR lense",
        price: 51,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 1,
        id: 12,
    },  
];