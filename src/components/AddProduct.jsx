import React, { useState } from 'react'

import './product/add.css'

export const AddProduct = () => {

  const [value, setValue] = useState({
    title:"",
    description:"",
    price:"",
    rating:"",
    brand:'',
    category:"",
    stock:"",
    images:"",
    discount:""

  })
  const onChange = (ele) => {
    const { name, value } = ele.target
    setValue((ele) => ({ ...ele, [name]: value }))
  }
  function onClick1() {
    console.log(value)
  }
  
  return (
    <>
      <form onSubmit={onClick1}>

        <h1>Add Product</h1>

        <fieldset>

          <legend><span className="number">1</span>Fill Product Details</legend>

          <label htmlFor="name">title:</label>
          <input type="title" id="name" onChange={onChange} value={value.title} name="title" />

          <label htmlFor="dis">Description:</label>
          <textarea id="dis" name="description" onChange={onChange} value={value.description}></textarea>

          <label htmlFor="price">price:</label>
          <input type="price" id="price" name="price" value={value.price}onChange={onChange}/>

          <label htmlFor="rate">rating:</label>
          <input type="rating" id="rate" name="rating" value={value.rating} onChange={onChange} />

          <label htmlFor="brand">brand:</label>
          <input type="brand" id="brand" name="brand" value={value.brand} onChange={onChange} />

          <label htmlFor="category">category:</label>
          <input type="category" id="category" name="category" value={value.category} onChange={onChange} />

          <label htmlFor="Stock">stock:</label>
          <input type="stock" id="stock" name="stock" value={value.stock} onChange={onChange} />

          <label htmlFor="image">imagesUrl</label>
          <input type="images" id="images" name="images" value={value.images} onChange={onChange} />

          <label htmlFor="discount">discountPercentage:</label>
          <input type="discount" id="discount" name="discount" value={value.discount} onChange={onChange}/>





        </fieldset>

        <button type="submit" onClick={onClick1}>Add Product</button>

      </form>
    </>
  )
}

