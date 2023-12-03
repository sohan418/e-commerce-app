// Marquee.js
import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
          <div className="marquee-content">
          <span className="new-text"><b>New </b> </span>
              <span >  Product Offer - Get 20% Off! </span>
              <span className="buy-text">  Buy Now</span>
      </div>
    </div>
  );
};

export default Marquee;
