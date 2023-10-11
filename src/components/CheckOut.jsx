import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import img from '../img/img-icon.png'
import {addAddress} from '../Redux/reducers/productReducers'
export const CheckOut = () => {
    var navigate = useNavigate();
    var dispatch = useDispatch();
    const [err, setError] = useState('')
    const [value, setValue] = useState({
        address: ""
    })

    const onChange = (ele) => {
        const { name, value } = ele.target
        setValue((ele) => ({ ...ele, [name]: value }))
        console.log(value)
    }

    var handleAddress = (e) => {
        e.preventDefault();
        if (value.address.length > 10) {
            dispatch(addAddress(value.address));
            navigate("/items");
        }
        else {
            setError("Length of address should be greater than 10");
        }
    }
    return (

        
                
    <div>
        <div className='navbar'>
            <div className="leftside">
                <div className="logo">
                    <img src={img} style={{ width: '80px', height: "auto", padding: "15px", marginLeft: "50px" }}></img>
                </div>
            </div>
            <div className="leftside">
                <div><Link className='navlink' to='/product'style={{marginRight:"50px"}} >Home</Link></div>
            </div>
        </div>

        <form onSubmit={handleAddress}>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Address</label>
                <textarea class="form-control" name="address" id="exampleFormControlTextarea1" onChange={onChange} on placeholder='Enter address' value={value.address} rows="3"></textarea>
                {err.length > 1 && (<span style={{color:"red"}}>{err}</span>)}
            </div>
            <Button variant="primary" type="submit" className="m-2" onClick={handleAddress}>Submit</Button>

        </form>



    </div>
    )
}
