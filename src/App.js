//import logo from './logo.svg';
import './App.css';
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import{Moreinfo} from './components/Moreinfo'
import {EachCartProduct} from './components/EachCartProduct'
import { CheckOut } from './components/CheckOut';
import {AddProduct} from "./components/AddProduct"
import {DeliveryItems} from  './components/DeliveryItems'
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  var product = useSelector((state)=>state.product)
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/product' element={<Home/>}></Route>
      <Route path='/moreinfo' element={<Moreinfo props={product} />}></Route>
      <Route path ='/cart' element={<EachCartProduct/>}></Route>
      <Route path ='/Checkout' element={<CheckOut/>}></Route>
      <Route path ='/items' element={<DeliveryItems/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
    
      
    </Routes>
   </Router>
  );
}

export default App;