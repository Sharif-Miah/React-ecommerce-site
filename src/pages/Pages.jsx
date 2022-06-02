import React from 'react'
import FlashDeals from '../component/flashDeals/FlashDeals'
import Home from '../component/mainpage/Home'

const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems}  addTOCart={addToCart}/>
    </>
  )
}

export default Pages