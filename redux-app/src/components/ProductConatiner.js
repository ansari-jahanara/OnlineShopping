import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { getProducts } from '../Store/Product/ProductSlice'


function ProductConatiner() {
    // const [products , setProducts] = useState([])
  
    // const getProducts = async() => {
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json()
    //   setProducts(data)
    // }
  
    const {products , isLoading , isError} = useSelector(state=>state.products)
    const dispatch =  useDispatch()

    useEffect(()=>{
    // getProducts()
    dispatch(getProducts('https://fakestoreapi.com/products'))
     },[])

     if(isLoading){
      return ( 
        <h1>Loading...</h1>
      )
     }
     if(isError){
      return (
        <h1>Something went wrong</h1>
      )
     }
    
 return (
    <>
    <div className='container mx-auto p-4'>
        <h3 className='text-decoration-underline'>New Product</h3>
        <div className='row'>
        {
        products.map(product =>  <Product key={product.id} product={product} />)
       }
        </div>

    </div>
</>
  )
}

export default ProductConatiner