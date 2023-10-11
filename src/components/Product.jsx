import React from 'react'
import { EachProduct } from "./EachProduct";


export const Product = ({props}) => {
  return (
    <div class="row">
    {props.map((ele)=>
    < EachProduct key={ele.id} product={ele}></EachProduct>
    

    )}
    </div>
    
  )
}
