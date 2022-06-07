import './App.css'
import Header from './common/Header/Header';
import Pages from '../src/pages/Pages';
import Data from './component/flashDeals/Data';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './component/Sdata';


function App() {
  // step1: fetch data from databage

  const {productItems} = Data
  const {shopItem} = Sdata

  const [CartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if(productExit){
      setCardItem(CartItem.map((item)=> 
      (item.id === product.id ? 
        {...productExit, qty: productExit.qty + 1}: item)))
    }else{
      setCardItem([...CartItem, {...product, qty: 1}])
    }
  }

  const decreaseQty = (product) =>{
    const productExit = CartItem.find((item)=> item.id === product.id)

    if(productExit.qty === 1){
      setCardItem(CartItem.filter((item)=> item.id !== product.id))
    }else{
      setCardItem(CartItem.map((item)=> (item.id) === product.id ? {...productExit, qty: productExit.qty - 1}: item))
    }
  }


  return (
    <>
      <Router>
        <Header cartItem={CartItem}/>
          <Switch>
              <Route path="/" exact>
                <Pages productItems={productItems} addToCart={addToCart} shopItem={shopItem} />
              </Route>
              <Route path="/cart" exact>
                <Cart cartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
              </Route>
            </Switch>
    </Router>
    </>
  );
}

export default App;
