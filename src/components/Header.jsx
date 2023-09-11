import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import UserContext from "../utils/UserContext";
import "../../index.css"
import { useSelector } from "react-redux";
// import store from "../utils/store";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../utils/cartSlice";
import logo from "../assets/logo.png"

function Header() {

  const {user}= useContext(UserContext);
  const cart = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();
  // console.log(cart)
  return <div className="nav-bar">
    <Link to='/'><img data-testid="logo" src={logo} alt="logo" /></Link>
    <ul>
      <Link to='/'><li>Home</li></Link>
      <Link to='/cart'><li data-testid="cart-items">Cart - {cart.length}</li></Link>
      <Link to="/about-us"><li >About Us</li> </Link>
      <Link to="/instamart"><li >Instamart</li> </Link>
      <li onClick={() => dispatch(clearItem())}>login</li>
    </ul>
    <h4>{user.name}</h4>
  </div>;
}

export default Header;
