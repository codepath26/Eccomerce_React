import React from "react";
import Product from "./Product";


const products = [
  { 
    id :1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  { 
    id :2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  { 
    id :3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  { 
    id :4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  { 
    id :5,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  
  { 
    id :6,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  
];

function Store() {

  return   <div className="container text-center">
          <div className="row">

      {
        products.map((product)=>(
          <Product key={product.id} product ={product}/>
          ))
        }
        </div>
  </div>
}

export default Store;
