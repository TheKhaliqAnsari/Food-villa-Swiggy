import { redirect, Link } from "react-router-dom";
import "../../index.css"

function Header() {
  const title = "Food Villa";
  return <div className="nav-bar">
    <Link to='/'><img src="https://lh3.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT=w1080-h608-p-no-v0" alt="logo" /></Link>
    <ul>
      <li>Home</li>
      <li>Cart</li>
      <Link to="/about-us"><li >About Us</li> </Link>
      <li>login</li>
    </ul>
  </div>;
}

export default Header;
