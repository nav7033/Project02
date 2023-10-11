import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import img from '../img/img-icon.png'

export const DeliveryItems = () => {

    var cart = useSelector((state) => state.Carts);
    var address = useSelector((state) => state.address)
   

    let list = [];
    Object.keys(cart).forEach((item) => {
        list.push(cart[item]);
    });

    return (
        <div>
            <div className='navbar'>
                <div className="leftside">
                    <div className="logo">
                        <img src={img} style={{ width: '80px', height: "auto", padding: "15px", marginLeft: "50px" }}></img>
                    </div>
                </div>
                <div className="leftside">
                    <div><Link className='navlink' to='/product' style={{ marginRight: "50px" }} >Home</Link></div>
                </div>
            </div>


            <Container>
                <h2>List of ordered items</h2>
                {list.map((item, id) => {
                    return ( <p key={id}>{item.title}</p>
                             
                    )
                })}

                <h4>Will be delivered to..</h4>
                {address}
            </Container>
        </div>
    )
}
