import React from 'react'
import Discount from '../component/discount/Discount'
import FlashDeals from '../component/flashDeals/FlashDeals'
import Home from '../component/mainpage/Home'
import NewArrivals from '../component/newarrivals/NewArrivals'
import Shop from '../component/shop/Shop'
import TopCate from '../component/Top/TopCate'



const Pages = ({productItems, CartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home CartItem={CartItem} />
        <FlashDeals productItems={productItems}  addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        
    </>
  )
}

export default Pages