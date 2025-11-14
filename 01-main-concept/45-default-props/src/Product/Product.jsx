import React from "react";
import "./Product.css";

export default function Product({title ,image='11.png' ,price}) {
    
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

//     Product.defaultProps = {
//     image:'11.png'
// } 