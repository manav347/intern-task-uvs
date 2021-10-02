import React from 'react';
import "../Products/Products.css"


const Products=({productItems, handleAddProduct})=>{
    return(
        <div  id="Main-page row">
            <div  className="row main-con">

            {productItems.map((productItem) =>
                <div>

                    {/*                 TEST
                    <div>
                        <img src={productItem.image} alt={productItem.name}></img>
                        <h1 className="produ" >{productItem.name}</h1>
                    </div> */}


                    <div>
                        <div className="pro-card ">
                            <div className="pro-card-top">
                                <h3 className="pro-card-heading">
                                <img className="shoeimage" src={productItem.image} alt={productItem.key}></img>
                                </h3>
                            </div>
                            <div className="pro-card-bottom">
                                <div className="pro-card-head-con">
                                    <p className="pro-card-head">{productItem.name}</p>
                                    <p className="pro-card-head">{productItem.des}</p>
                                </div>

                                <div className="pro-card-link-con row">
                                    <p className="pro-card-link-txt">price : </p>
                                    <p className="pro-card-head"> {productItem.price}</p>
                                    <button onClick={()=>handleAddProduct(productItem)} className="actions__deleteItemBtn delete-pro" >
                                    <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            )}
            </div>
        </div>
    );
}



export default Products;