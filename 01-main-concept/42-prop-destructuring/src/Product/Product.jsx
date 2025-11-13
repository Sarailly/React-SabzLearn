import React from "react";
import "./Product.css";

export default function Product({title, image ,price, count}) {

    // console.log(props);
    
    return (

        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={image} alt="laptop" />
                <h1>{title}</h1>
                <p className="price">{price}$</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                    ratione itaque repellat soluta eius esse alias ducimus, aspernatur
                    similique quis?
                </p>
                <p><button>Add To Card</button></p>
            </div>
        </div>
    )
    
}
