import React from 'react'
import './product/product.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import {addToCart,incCartCount} from '../Redux/reducers/productReducers'
import { Navbar } from "./Navbar"

   

export const Moreinfo = ({props}) => {
    var dispatch = useDispatch();
    function handleCart(){
         dispatch(addToCart(props))
         dispatch(incCartCount()) 
    }
    return (
        <>
        <Navbar/>
        <div className="card" style={{marginLeft:'100px', marginRight:"100px"}} ><a className="card-img-tiles"  href="#" data-abc="true">
            <div className="inner container" style={{width:"50%"}} >
                <div className="main-img"><img src={props.images[0]} alt="Category" /></div>
                <div className="thumblist"><img src={props.thumbnail} alt="Category" /><img src={props.thumbnail}alt="Category" /></div>
            </div></a>
            <div className="card-body text-center container">
                <h4 className="card-title">{props.title}</h4>
                <p className="text-muted"> $&nbsp;&nbsp;{props.price}</p>
                <p className="text-muted">{props.category}</p>
                <p className="text-muted">{props.brand}</p>
                <p className="text-muted">stock:-&nbsp;{props.stock}</p>
                <p className="text-muted">Discount:-&nbsp;{props.discountPercentage}%</p>
                <p className="text-muted">{props.description}</p>
                <Button variant="info" style={{cursor:'pointer'}} onClick={()=>handleCart()}>Add to cart</Button>

                
                
            </div>
        </div>
        </>

    )
}


