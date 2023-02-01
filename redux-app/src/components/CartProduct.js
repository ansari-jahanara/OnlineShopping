import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove , add ,decrement,increment} from '../Store/Cart/CartSlice'
function CartProduct({ product}) {
  const { image, title,price, id } = product

  const dispatch = useDispatch()
 
  const handleRemove = (id) => {
  dispatch(remove(id))
  } 
  
  const handleInc = (value)=>{
  dispatch(increment(product))
  }

  const handleDec = (value)=>{
  dispatch(decrement(product))
  }
  
  const [val, setVal] = useState(1)
  
  const finalPrice = price*val
  return (
    <>
      <div>
        <div className="card m-2 CartProduct">
          <img src={image} className="mx-auto m-2" alt="..." height="150px"  width="100px"/>
          <div className="card-body d-flex flex-column">
            <h6 className="card-title fs-7 text-center">{title}</h6>
            
              <h5 className='text-danger text-center' >${finalPrice}</h5>
              <div className="mx-auto d-flex flex-column">
              <div className='mt-auto'>
              <button className="btn btn-danger btn-sm " onClick={() => handleRemove(id)}>Remove Item</button>
              <span  className='btn btn-group'>
              <button className='btn btn-info btn-sm' onClick={()=>handleInc(setVal(val+1))}>+</button>
              <input className="border border-start-0 border-end-0 " style={{"width":"1vw"}}/>
              <span className='me-3 '>{val}</span>  
              <button className='btn btn-info btn-sm' onClick={()=> handleDec(val===1 ? setVal(1) : setVal(val-1))}>-</button>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct