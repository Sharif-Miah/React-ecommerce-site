import React from 'react'

const Cart = ({cartItem, addToCart}) => {
  return (
    <>
        <section className='cart-item'>
          <div className="container d_flex">
            <div className="cart-details">
              {cartItem.length === 0 && <h1 className='no-items product'>No Items are  Add  in Cart</h1>} 
              {cartItem.map((item) => {
                const productQty = item.price * item.productQty
                return(
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
    </>
  )
}

export default Cart;