// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={isMobile ? 'sticky' : ''}>
      <div className="logo"><img src="images/logo1.png" alt="" /></div>
      <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Contact</a></li>
        <li className="cart-icon"><i className="fas fa-shopping-cart"></i></li>
        <li className="account-icon"><i className="fas fa-user"></i></li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className="action-buttons">
        <div className="add-to-cart"><img src="images/cart-icon.svg" alt="" /><span>Cart</span></div>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
