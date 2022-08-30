import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {reducer} from './reducer'
import { Provider } from "react-redux";
import {createStore} from 'redux'

const initialStore ={
  cart:cartItems,
  total:120,
  amount:5
}


const store = createStore(reducer,initialStore);


console.log(store.getState())

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar cart={store.getState()}/>
      <CartContainer />
    </Provider>
  );
}

export default App;
