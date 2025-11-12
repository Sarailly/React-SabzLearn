import React from 'react'
import Product from './Product/Product'
import "./App.css"

export default function App() {
  return (
    <div className='container'>
      <Product title="Asus" image="../public/images/laptop1.jpg" price={1000} />
      <Product title="Acer" image="../public/images/laptop2.jpg" price={1880} />
      <Product title="Hp" image="../public/images/laptop3.jpg" price={2600} />
    </div>
  )
}
