import React from 'react'

function Productcard({title,price, image, rating}) {
  return (
    <>
    <div className='card'>
<img src={image} alt="" />
<p>{title}</p>
<p>${price}</p>
<p>Rating:{rating.rate}/5</p>
    </div>
    </>
  )
}

export default Productcard
