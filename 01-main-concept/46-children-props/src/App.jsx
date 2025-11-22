import React from 'react'
import Product from './Product/Product'
import "./App.css"

export default function App() {

  const AllProduct = [
    { id:1, title: 'Asus', image:'/images/laptop1.jpg' , price:800, count:140 },
    { id:2, title: 'Acer', image:'/images/laptop2.jpg' , price:205,count:180 },
    { id:3, title: 'Hp', image:'/images/laptop3.jpg ', price:395, count:100 },
  ]
  return (
    <div className='container'>
      
     <Product {...AllProduct[0]} >
        <button>OFF BLACK FRIDAY</button>
        {/* access by childeren props  */}
      </Product>
      <Product {...AllProduct[1]} >
        <button>OFF 20% </button>
      </Product>
      <Product {...AllProduct[2]} >
        <h2>OFF 42%</h2>
      </Product>
    </div>
  )
}


 
