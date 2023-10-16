import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'
import "./Api.css"
function Api() {
const [products,updateproducts]=useState([])

useEffect(
  ()=>{
    getproducts()
  },[]
)

async function getproducts(){
  let res= await fetch('https://fakestoreapi.com/products')
  let productlist= await res.json()
  updateproducts(productlist)
}


if(products.length === 0){
  return(
    <h1>Fetching data...</h1>
  )
}


  return (
    <>
 <div className='product-list'>
 {
    products.map((product)=><Productcard {...product} key={product.id}></Productcard>)
  }
 </div>
    </>
  )
}

export default Api