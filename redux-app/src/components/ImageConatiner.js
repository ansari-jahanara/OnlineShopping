import React from 'react'
import dress from '../images/dress-store.jpg'
import accessories from '../images/accessories.jfif'
import electronics  from  '../images/electronics-1.jpeg'
import mens from '../images/mens-2.jpg'
import cosmetics from '../images/cosmetic.jfif'
import { getProducts } from '../Store/Product/ProductSlice'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
function ImageConatiner() {
    const dispatch =  useDispatch()
    const fetchAccessories = ()=>{
       dispatch(getProducts('https://fakestoreapi.com/products/category/jewelery'))
    }

    const fetchMensWear = ()=>{
       dispatch(getProducts(`https://fakestoreapi.com/products/category/men's clothing`))
   
    }
    
    const fetchWomensWear = () =>{
        dispatch(getProducts(`https://fakestoreapi.com/products/category/women's clothing`)) 
    }

    const fetchElectronics = () =>{
        dispatch(getProducts(`https://fakestoreapi.com/products/category/electronics`)) 
    }
  return (
   <>
   {/* grids */}
    <div className="container p-3">
        <div className="row">
            <div className="first col-md-6 p-2">
                <Link to="#" onClick={()=>fetchWomensWear()}><img src={dress} height="100%" width="100%"/></Link>
            </div>
            <div className="second col-md-6">
                <div className="container  w-100 p-1">
                    <div className="d-flex">
                    <div className="mens m-1 border border-dark"><Link to="#" onClick={()=>fetchMensWear()}><img src={mens} className="img-fluid"/></Link></div> 
                    <div className="kids m-1 border border-dark" ><Link to="#" onClick={()=>fetchElectronics()}><img src={electronics} height="100%" width="100%" className="img-fluid"/></Link></div>
                    </div>
                    <div className="d-flex">
                        <div className="cosmetics m-1 border border-dark"><Link to="#"><img src={cosmetics} height="100%" width="100%" className="img-fluid"/></Link></div>
                    <div className="accessories m-1 border border-dark"><Link to="#" onClick={()=>fetchAccessories()}><img src={accessories} height="100%" width="100%" className="img-fluid"/></Link></div>   
                    </div>
                </div>
            </div>
        </div>
    </div>

   </>
  )
}

export default ImageConatiner