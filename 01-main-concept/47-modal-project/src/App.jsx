import React from 'react'
import  Modal from './modal/Modal'


export default function App() {

  return (
    <div className='container'>
   <Modal >
      <p>Are you sure you want delete this element ?</p>
                <ul className="cd-buttons">
                    <li><a href="#0">Yes</a></li>
                    <li><a href="#0">NO</a></li>
                </ul>
   </Modal >
    </div>
  )
}


