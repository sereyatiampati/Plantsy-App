import React from 'react'

function PlantItem({plant}) {
    const {name, price, image}= plant
    //console.log(name, image, price)

   return  ( 
    <div className='card'>
      <img src={image} alt=""/>
      <h3>{name}</h3>
      <p>{price}</p>
      <button type='submit'>In stock</button>
    </div>
    )
}
export default PlantItem