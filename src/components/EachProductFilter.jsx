import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Moreinfo} from './Moreinfo'

export const EachProductFilter = ({product}) => {
  const [value,setValue]=useState(null)

  function handle(data){
    setValue(data)
  }
  if(value != null){
    return (
      <Moreinfo props={value}/>
    )
  }
  
  return (
    <>
    <Card style={{ width: '18rem',display:'flex' }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price:-&nbsp; $ {product.price}</Card.Text>
            <Card.Text>Category:-&nbsp; {product.category}</Card.Text>
            <Card.Text className="empty-stars">&nbsp;{product.rating}</Card.Text>
            <Button variant="info"id={product.id} onClick={() => handle(product)}>More Details</Button>
           
        </Card.Body>
    </Card>
</>
  )
}
