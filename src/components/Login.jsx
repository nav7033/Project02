import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    var navigate = useNavigate();
    const [value, setValue] = useState({
        email: "",
        password: ""


    })
    const [err, setErr] = useState({
        email: "",
        password: ""

    })
    function data() {
        if (!(value.email === "" && value.password === "")) {
            console.log("Data :", value)
        }
    }
    const onChange = (ele) => {
        const { name, value } = ele.target
        setValue((ele) => ({ ...ele, [name]: value }))
    }
    console.log(err)

    const onSubmit = function (ele) {
        ele.preventDefault();
        if(value.email === "" && value.password === ""){
            setErr((ele) => ({
                ...ele, email: "required email*",password: "required password*"
            }))

        }
        else if (!/(^$|^.*@.*\..*$)/.test(value.email)) {
            setErr((ele) => ({
                ...ele, email: "Invalid Email*"
            }))
        }
       
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value.password)) {
            setErr((ele) => ({
                ...ele, password: "password length should be min 8 and [Aa@1]*"
            }))
        }
        
        else if(!(err.email=="" && err.password=="") ){
            navigate("/product");
        }

        

        data();

    }
    return (
        <div>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid" alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={onSubmit}>


                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">Login</p>
                                </div>

                                {/*Email input*/}
                                <div class="form-outline mb-4">
                                    <input name='email' type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Email Id" onChange={onChange} value={value.email} />
                                    <label class="form-label" for="form3Example3">Email</label>
                                    {err.email && (<div>
                                        <p class="danger">{err.email}</p>
                                    </div>)}
                                </div>

                                {/*Password input*/}
                                <div class="form-outline mb-3">
                                    <input name='password' type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password" onChange={onChange} value={value.password} />
                                    <label class="form-label" for="form3Example4">Password</label>
                                    {err.password && (<div>
                                        <p class="danger">{err.password}</p>
                                    </div>)}
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    {/*check box*/}
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg button"
                                        onClick={onSubmit}>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
