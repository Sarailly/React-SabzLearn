import React from "react";
import "./Product.css";

export default function Product(props) {

    console.log(props);
    
    return (
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={props.image} alt="laptop" />
                <h1>{props.title}</h1>
                <p className="price">{props.price}$</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                    ratione itaque repellat soluta eius esse alias ducimus, aspernatur
                    similique quis?
                </p>
                <p><button>Add To Card</button></p>
            </div>
        </div>
    );
}
