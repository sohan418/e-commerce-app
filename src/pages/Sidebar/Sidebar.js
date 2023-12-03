import React, { useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav>
      <div className="logo">Your Logo</div>
      <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default Navbar;
