import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getProducts } from '../Store/Product/ProductSlice'
function Nav() {
const cart = useSelector(state=>state.cart) 
const dispatch = useDispatch()
const fetchProducts = () =>{
        dispatch(getProducts('https://fakestoreapi.com/products'))
}
  return (
   
    <>
    <div className="row-container-fluid sticky-top">
      <marquee style={{"wordSpacing":"5px"}} className="bg-warning p-1 row" scrolldelay="120" scrollamount="8">Get Flat 50% Off On First Order. Limited Period Offer</marquee>
        <nav className="navbar navbar-expand-lg p-2 " style={{"backgroundColor": "burlywood"}}>
            <div className="container-fluid">
                <button className="navbar-toggler toggleButton " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggleIcon " style={{"height": "15px; width: 15px"}}></span>
                </button>
                <a className="navbar-brand fs-1 fw-bolder mr-auto navBrand" href="#"
                    style={{"fontFamily":"Moon Dance, cursive"}}>Online Shopping</a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={()=>fetchProducts()}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="" >Contact</a>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">              
                <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" fill="currentColor" className="bi bi-person-circle signin" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                <span >
                <Link to={"/cart"}> <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="35px" fill="currentColor" className="bi bi-cart4 ms-3 cart" viewBox="0 0 16 16 ">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg></Link>
                      <sup className="text-dark bg-danger rounded-circle ps-1 pe-1">{cart.length}</sup>
                </span>  
                </form>
            </div>
        </nav>
        <span className=' d-flex justify-content-end p-1'>
        <input value="search" type="text" className='border-2 border-dark border-top-0 border-start-0 border-end-0 me-2'/><svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-search me-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </span>
        
    </div>
    </>
  )
}

export default Nav