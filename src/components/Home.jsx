import React, { useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

//import product from './products.json'
import {loadAllProducts,isSelected} from '../Redux/reducers/productReducers'
import { useSelector, useDispatch} from "react-redux";
import { Product } from "./Product";
import { EachProductFilter } from './EachProductFilter'
import { Navbar } from "./Navbar"
import axios from 'axios'

export const Home = () => {
    const dispatch = useDispatch()
    
    var product = useSelector((state)=> state.allProducts);



    
    product = product.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.category === value.category
        ))
    );
    const record = product
    const [active, setActive] = useState('');
    const [Sortprice1, setSort] = useState(record);
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('');
    const [title, setTitle] = useState({
        title: ""
    })
    var [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadData () {
            await axios.get('https://dummyjson.com/products?limit=1000')
            .then(response => {
                dispatch(loadAllProducts(response.data.products));
                setLoading(false);
            });
        }
        loadData();
    }, [dispatch]);

    //console.log(Sortprice1)
    const [instock, setstock] = useState('')
    const handleChange = (eachData) => {
        setActive(eachData.id)
        setCategory(eachData.category)
        setBrand(eachData.brand)
        //setstock(eachData.stock)
        filterfunction(eachData.category)
        filterfunction1(eachData.brand)
    }

    function sort (){
        const dataToSort = [...record]
        const sort1 = dataToSort.sort((a,b)=>Number(a.price)-Number(b.price))
        setSort(sort1)
    }
    function sortRating (){
        const dataToSort = [...record]
        const sort1 = dataToSort.sort((a,b)=>Number(a.rating)-Number(b.rating))
        setSort(sort1)
    }
    function sortDiscount (){
        const dataToSort = [...record]
        const sort1 = dataToSort.sort((a,b)=>Number(a.discountPercentage)-Number(b.discountPercentage))
        setSort(sort1)
    }
    function titleSearch(){
    const search =  record.filter(ele => ele.title.startsWith(title.title))
    setSort(search)

    }
   
    const [filterProduct, setFilterProduct] = useState([])
    const filterfunction = (data) => {
        if (product.length > 0) {
            const filter = product.filter((ele) => ele.category == data)
            setFilterProduct(filter);
        }

    }
    const filterfunction1 = (data) => {
        if (product.length > 0) {
            const filter = product.filter((ele) => ele.brand == data)
            setFilterProduct(filter);
        }

    }
    //return to all product
    const returnToAll = () => {
        setActive('')
        setCategory('')
        setBrand('')
        setFilterProduct([])
    }
    const onChange = (ele) => {
        const { name, value } = ele.target
        setTitle((ele) => ({ ...ele, [name]: value }))
    }
    //console.log(title)
    
    if (title != null) {
        <div classNameName='my-product'>
            <h1 classNameName='text-center'>All Product</h1>
            <Product props={product} />
        </div>
    }

    if(loading){
        return (
            <>
            <Container>
                <img src="https://media.giphy.com/media/AAO7CYEKrIGfGphpFO/giphy.gif" alt="gif" />
            </Container>
            </>
        )
    }



    return (
        <>

            <Container>
                <Row>
                    <Navbar />

                    <Col md={{ span: 3 }}>

                        <h1>Filter</h1>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Category</Accordion.Header>
                                <Accordion.Body>
                                    {product.map((ele, index) => (
                                        <div>
                                            <Button variant="info"
                                                key={index} id={ele.id}
                                                onClick={() => handleChange(ele)}
                                                classNameName={ele.id === active ? active : "deactive"}>{ele.category}</Button>
                                        </div>

                                    ))}

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Brands</Accordion.Header>
                                <Accordion.Body>

                                    {product.map((ele, ind) => (
                                        <div className="form-check">
                                            <input key={ind}
                                                id={ele.id}
                                                onClick={() => handleChange(ele)} classNameName={ele.id === active ? active : "deactive"}
                                                className="form-check-input" type="checkbox" value={ele.brand} />
                                            <label className="form-check-label" for="defaultCheck1">
                                                {ele.brand}
                                            </label>
                                        </div>


                                    ))}

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Title</Accordion.Header>
                                <Accordion.Body>
                                    <div className="input-group">
                                        <input name='title'
                                            type="search"
                                            className="form-control rounded"
                                            placeholder="Search"
                                            aria-label="Search" aria-describedby="search-addon"
                                            onChange={onChange} value={title.title} />
                                        <button type="button" className="btn btn-outline-primary" onClick={() => titleSearch()}>search</button>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Sort</Accordion.Header>
                                <Accordion.Body>

                                    <div>
                                        
                                        <Button variant="info" onClick={sort}>Price</Button>
                                        
                                        

                                        <Button variant="info" onClick={sortRating}>Rating</Button>
                                        <Button variant="info" onClick={sortDiscount}>discount Percentage</Button>
                                        <Button variant="info">Asending</Button>
                                    </div>




                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>In stock</Accordion.Header>
                                <Accordion.Body>

                                    {product.map((ele, ind) => (
                                        <div className="form-check">
                                            <input key={ind}
                                                id={ele.id}
                                                onClick={() => handleChange(ele)}
                                                classNameName={ele.id === active ? active : "deactive"}
                                                className="form-check-input" type="checkbox" value={ele.stock} />
                                            <label className="form-check-label" for="defaultCheck1">
                                                {ele.stock}
                                            </label>
                                        </div>


                                    ))}


                                </Accordion.Body>
                            </Accordion.Item>


                        </Accordion>
                    </Col>
                    <Col rm={4}>
                        {filterProduct.length > 0 && (
                            <div classNameName='my-product'>
                                <a href='#' onClick={returnToAll}>return to all product</a>
                                {filterProduct.map(ele => (
                                    <EachProductFilter key={ele.id} product={ele}></EachProductFilter>

                                ))}


                            </div>
                        )}
                        {filterProduct.length < 1 && (
                            <div classNameName='my-product'>
                                <h1 classNameName='text-center'>All Product</h1>
                                <Product props={Sortprice1} />
                            </div>

                        )}
                        {filterProduct.length < 1 && (
                            <div classNameName='my-product please-wait'>Please wait....</div>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
