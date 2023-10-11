import React,{useState} from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moreInfo } from "../Redux/reducers/productReducers";
;



export const EachProduct = ({ product }) => {
const [value,setValue]=useState(null)
var navigate = useNavigate();
var dispatch = useDispatch();
  function handle(data){
    setValue(data)
    dispatch(moreInfo(data))
  }
  if(value != null){
    navigate('/moreinfo')
  }
  


    return (

        <Card style={{ width: '18rem' , margin:'8px'}}>
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price:- $ {product.price}</Card.Text>
                <Card.Text>Category:- {product.category}</Card.Text>
                <Card.Text className="empty-stars">{product.rating}</Card.Text>
                <Button variant="info" onClick={()=>handle(product)}>More Details</Button>
                
            </Card.Body>
        </Card>

    )
}
