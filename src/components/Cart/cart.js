import React from "react";
import "../Cart/cart.css";

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance})=>{
    console.log(cartItems)

    const totalPrice = cartItems.reduce(
        (price, item)=> price+ item.quantity * item.price, 0
    );

    return(
        <div className="cart-items-con">
            <h3 className="cart-header flex-start">Cart Items</h3>
            <div className="clear-cart flex-end">
                <button className=" trash" onClick={handleCartClearance}><i class="fas fa-trash"></i></button>
            </div>
            {cartItems.length === 0 && <div className="no-item">no items</div>}

            {cartItems.map((item)=>(
                <div key={item.id} className="cart-item">
                    <img className="cart-item-image" src={item.image} alt={item.name}></img>
                    <div className="cart-item-name"><h4>{item.name}</h4></div>
                    <div className="cart-function">
                        <button onClick={()=>handleAddProduct(item)} className="add">
                        <i className="fas fa-plus"></i>
                        </button>
                        <button onClick={()=>handleRemoveProduct(item)}  className="sub">
                        <i className="fas fa-minus"></i>
                        </button>
                    </div>
                    {/* <div className="card-item-quantity">{item.quantity}</div> */}
                    <div className="card-item-price">{item.quantity} * ${item.price}</div>
                </div>
            ))}

            <div className="total-price-con">
                <h3 className="total-price">
                    ${totalPrice}
                </h3>
            </div>

                
        </div>
    );
}

export default Cart;