import React from 'react'
import Product from './Product/Product'
import "./App.css"

export default function App() {

  const AllProduct = [
    { id:1, title: 'Asus', image:'../public/images/laptop1.jpg' , price:800, count:140 },
    { id:2, title: 'Acer', image:'../public/images/laptop2.jpg ', price:205,count:180 },
    { id:3, title: 'Hp', image:'../public/images/laptop3.jpg ', price:395, count:100 },
  ]
  return (
    <div className='container'>
      <Product {...AllProduct[0]} />
      <Product {...AllProduct[1]} />
      <Product {...AllProduct[2]} />
    </div>
  )
}


 {/* // title={AllProduct[0].title} image={AllProduct[0].image} price={AllProduct[0].price} count={AllProduct[0].count}  */}
