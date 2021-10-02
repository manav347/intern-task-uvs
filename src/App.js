import React, { useState } from 'react';
import data from '../src/components/Data'
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './components/Routes';

const App=()=> {

  const {productItems}=data;
  const [ cartItems,setCartItems ]=useState([]);

  const handleAddProduct =(product)=>{
    const ProductExist = cartItems.find((item)=>item.id=== product.id)
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id===product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item))
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const handleRemoveProduct = (product)=>{
    const ProductExist = cartItems.find((item)=>item.id=== product.id)
    if (ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !== product.id));
    }
    else{
      cartItems.map((item)=> item.id=== product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
    }
  };

  const handleCartClearance =()=>{
    setCartItems([]);
  }

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes 
        productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
