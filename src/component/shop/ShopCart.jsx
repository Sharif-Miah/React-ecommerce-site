import React, { useState } from 'react';



const ShopCart = ({productItems, addToCart}) => {

    const [count, setCount] = useState(0)
    const incriment = () => {
        setCount(count +1)
    }


  return (
    <>

    {
        productItems.map((productItems, index) => {
        return(
            <div className="box" key={index}>
            <div className="product mtop">
                <div className="img">
                    <span className='discount'>{productItems.discount}% off</span>
                    <img src={productItems.cover} alt="" />
                    <div className="product-like">
                        <label>0</label> <br />
                        <i className='fa-regular fa-heart' onClick={incriment} ></i>
                    </div>
                </div>
                <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="rate">
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className="price">
                        <h4>{productItems.price}</h4>
                        <button onClick={()=> addToCart(productItems)}>
                            <i className='fa fa-plus'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
        
        })}
    </>
  )
}

export default ShopCart;