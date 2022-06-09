import React, {useState} from 'react'

const ShopCart = ({shopItems, addToCart}) => {
  const [count, setCount] =useState(0)
  const increment = () => {
    setCount(count + 1 )
  }


  return (
    <>
      {shopItems.map((shopItems)=> {
        return(
          
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className='discount'>{shopItems.discount}% off</span>
                <img src={shopItems.cover} alt="" />
                <div className="product-like">
                  <label>0</label>
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
            </div>
          </div>
          
        )
      })}
    </>
  )
}

export default ShopCart