import React from "react";
import "../components/routes.css"
import Products from "../components/Products/Products"
import Cart from "./Cart/cart";
import { Route, Switch } from "react-router";

const Routes = ({productItems ,cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return(
        <>
        <div className="routes-con"></div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/Cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
                </Route>
            </Switch>
        </>
    );
}

export default Routes;
