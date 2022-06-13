import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";
//import Sdata from "./Sdata";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <i className="fa fa-border-all"></i>

                <h2>Mobile Phone</h2>
              </div>
              <div className="heading-right row">
                <span>Vew all</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
