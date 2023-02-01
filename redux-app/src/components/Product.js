import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Store/Cart/CartSlice'
function Product({product}) {
    const {title , price, image, description}=product
    const dispach = useDispatch()

  const handleAdd = (product) => {
    dispach(add(product))
  }
  return (
    <>
 <div className="card  col-lg-3 col-md-6 col-12 h-auto g-2 ">
                 <img src={image} className="mx-auto" alt="..." height="250px" width="180px"/>
                 <div className="card-body d-flex flex-column">
                   <h6 className="card-title">{title}</h6>
                   <p className="card-text fs-6" style={{"height":"100px","overflow":"hidden"}}>{description}</p>
                   <div className="mt-auto d-flex">
                   <h5 className='ms-4 text-danger' >${price}</h5>
                   <button  className="btn btn-success btn-sm ms-5"onClick={(e)=>handleAdd(product)}>Add To Cart</button>
                   </div>
                   
                 </div>
               </div>
               
    </>
  )
}

export default Product