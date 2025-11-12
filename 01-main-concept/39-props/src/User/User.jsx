import React from 'react'

export default function User(props) {

    console.log(props);
    
  return (
    <div> 
        <h1>{props.name}\{props.age}</h1>
        
    </div>
  )
}
