import React from "react";
import "../Cart/cart.css";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    console.log(cartItems)

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    );

    // function AlertHandle() {
    //     const AlertHandle = () => {
    //         alert("Great Shot!");
    //     }
    const AlertHandle = () => {
        if (cartItems.length === 0) {
            alert("Please add some sneakers!");
        } else {
            alert("Shop Again!");
        }
    }
    return (
        <div className="cart-items-con">
            <h3 className="cart-header flex-start">Cart Items</h3>
            <div className="clear-cart flex-end">
                <button className=" trash" onClick={handleCartClearance}><i class="fas fa-trash"></i></button>
            </div>
            {cartItems.length === 0 && <div className="no-item">no items</div>}

            <div id="Main-page row">
                <div className="row main-con">
                    {cartItems.map((item) => (


                        <div key={item.id} className="">

                            {/*                 TEST
                    <div>
                        <img src={productItem.image} alt={productItem.name}></img>
                        <h1 className="produ" >{productItem.name}</h1>
                    </div> */}


                            <div>
                                <div className="pro-card ">
                                    <div className="pro-card-top">
                                        <h3 className="pro-card-heading">

                                            <img className="shoeimage" src={item.image} alt={item.name}></img>
                                            {/* <img className="shoeimage" src={productItem.image} alt={productItem.key}></img> */}
                                        </h3>
                                    </div>
                                    <div className="pro-card-bottom">
                                        <div className="pro-card-head-con">

                                            <div className="cart-item-name"><h4>{item.name}</h4></div>
                                            {/* <p className="pro-card-head">{productItem.name}</p> */}

                                            <div className="cart-function">
                                                <button onClick={() => handleAddProduct(item)} className="add">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                                <button onClick={() => handleRemoveProduct(item)} className="sub">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pro-card-link-con row">
                                            <div style={{ padding: "0 15px 0" }} className="card-item-price">{item.quantity} * ${item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
            <div className="total-price-con">
                <h3 className="total-price">
                    ${totalPrice}
                </h3>
            </div>
            <div className="total-price-con">
                <h3 className="total-price">
                    <button onClick={AlertHandle} style={{ textDecoration: "none", border: "none", padding: "5px 30px", borderRadius: "18px" }}>Buy</button>
                </h3>
            </div>


        </div>
    );
}

export default Cart;



// <div key={item.id} className="cart-item">
//     <img className="cart-item-image" src={item.image} alt={item.name}></img>
//     <div className="cart-item-name"><h4>{item.name}</h4></div>
//     <div className="cart-function">
//         <button onClick={() => handleAddProduct(item)} className="add">
//             <i className="fas fa-plus"></i>
//         </button>
//         <button onClick={() => handleRemoveProduct(item)} className="sub">
//             <i className="fas fa-minus"></i>
//         </button>
//     </div>
//     {/* <div className="card-item-quantity">{item.quantity}</div> */}
//     <div className="card-item-price">{item.quantity} * ${item.price}</div>
// </div>