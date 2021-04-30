import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from "./components/Default";
// import GoogleLogin from '../src/components/GoogleLogin'


// 3hr 25 min

function App() {
  return (
    <React.Fragment>
      {/* <GoogleLogin/> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>

      </Switch>
    </React.Fragment>
  );
}

export default App;
