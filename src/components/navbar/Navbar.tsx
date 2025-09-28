import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import './Navbar.css';
import { ShopContext } from '../context/ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png'

export const Navbar: React.FC = () => {
  const [menu, setMenu] = useState('Shop');
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open ');

  }

  return (
    <div className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
        <p className="nav-brand">SHOPPER</p>
      </div>
      <img className= 'nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />

      {/* Center: Menu */}
      <ul  ref = {menuRef} className="nav-menu">

        <li onClick={() => setMenu("Shop")}>
          <Link style={{textDecoration: 'none'}} to="/">Shop</Link>
          {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{textDecoration: 'none'}} to="/mens">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{textDecoration: 'none'}} to="/womens">Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      {/* Right: Login + Cart */}
      <div className="nav-right">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/cart">
          <div className="cart-icon-wrapper">
            <img src={cart_icon} alt="Cart" className="cart-icon" />
            <div className="cart-count">{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
