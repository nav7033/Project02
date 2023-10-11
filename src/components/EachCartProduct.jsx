import React from 'react'
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/feather/plus'
import { minus } from 'react-icons-kit/feather/minus'
import { x } from 'react-icons-kit/feather/x';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { shoppingCart } from 'react-icons-kit/feather/shoppingCart'
//import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img from '../img/img-icon.png'

import { incCartCount, increaseQuantity, decreaseQuantity, deleteCart } from '../Redux/reducers/productReducers'

export const EachCartProduct = () => {
    var allProducts = useSelector((state) => state.allProducts);
    var selectedCard = useSelector((state) => state.selectedCard);
    var cart = useSelector((state) => state.Carts);
    var cartCount = useSelector((state) => state.numberCart);
    var navigate = useNavigate();
    var dispatch = useDispatch();
    console.log(cart)
    let ListCart = [];
    let TotalCart = 0;
    console.log(ListCart)
    Object.keys(cart).forEach((item) => {
        TotalCart += cart[item].quantity * cart[item].price;
        ListCart.push(cart[item]);
    });
    function TotalPrice(price, quantity) {
        return Number(price * quantity).toLocaleString('en-US');
    }
    var handleProceed = () => {
        navigate("/Checkout");
    }
    //<Icon icon={minus} size={20} />

    return (




        <div className="row">
            <div className='navbar'>
                <div className="leftside">
                    <div className="logo">
                        <img src={img} style={{ width: '80px', height: "auto", padding: "15px",marginLeft:"50px"}}></img>
                    </div>
                </div>
                <div className="rightside">
                    <div><Link className='navlink' to='/product' >Home</Link></div>
                </div>
                <div className="cart-menu-btn">
                    <Link className='navlink' to='/cart'>

                        <Icon icon={shoppingCart} size={20} style={{marginRight:"100px"}}></Icon>
                    </Link>

                    <span className='cart-indicator'></span>
                </div>

            </div>
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ListCart.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td><span className="btn btn-danger" onClick={() => dispatch(deleteCart(key))}><Icon icon={x} size={20} /></span></td>
                                        <td>{item.title}</td>
                                        <td><img src={item.images[0]} style={{ width: '100px', height: '80px' }} /></td>
                                        <td>{item.price} $</td>
                                        <td>
                                            <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => dispatch(decreaseQuantity(key))}><Icon icon={minus} size={20} /></span>
                                            <span className="btn btn-info">{item.quantity}</span>
                                            <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => dispatch(increaseQuantity(key))}><Icon icon={plus} size={20} /></span>
                                        </td>
                                        <td>{TotalPrice(item.price, item.quantity)} $</td>
                                    </tr>
                                )
                            })

                        }
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                        </tr>
                        <Button variant="success" className="m-2" onClick={handleProceed}>Place Order</Button>
                    </tbody>

                </table>
            </div>
        </div>



    )
}
