import React from 'react'
import FlashDeals from '../component/flashDeals/FlashDeals'
import Home from '../component/mainpage/Home'

const Pages = ({productItems, CartItem, addToCart}) => {
  return (
    <>
        <Home CartItem={CartItem} />
        <FlashDeals productItems={productItems}  addToCart={addToCart}/>
    </>
  )
}

export default Pages