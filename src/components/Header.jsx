import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import UserContext from "../utils/UserContext";
import "../../index.css"
import { useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import store from "../utils/store";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../utils/cartSlice";

function Header() {

  const {user}= useContext(UserContext);
  const cart = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();
  console.log(cart)
  return <div className="nav-bar">
    <Link to='/'><img src="https://lh3.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT=w1080-h608-p-no-v0" alt="logo" /></Link>
    <ul>
      <li>Home</li>
      <li onClick={() => dispatch(addItem("khaliq"))}>Cart - {cart.length}</li>
      <Link to="/about-us"><li >About Us</li> </Link>
      <Link to="/instamart"><li >Instamart</li> </Link>
      <li onClick={() => dispatch(clearItem())}>login</li>
    </ul>
    <h4>{user.name}</h4>
  </div>;
}

export default Header;
