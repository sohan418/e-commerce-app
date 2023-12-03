import React from 'react';
import './App.css'; // Import your global styles
import Navbar from './pages/Navbar/Navbar.js';
import ProductList from './components/ProductCard/ProductCard.js';
import products1 from './data/ProductList1/ProductList1.js'
import product2 from './data/ProductList2/ProductList2.js'
import Footer from './pages/Footer/Footer.js';
import Marquee from './components/Marquee/Marquee.js';
const App = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div style={{"marginTop": "80px"}}>
        <Marquee />
      </div>
      <ProductList products={products1}></ProductList>
      {/* <ProductList products= {product2}></ProductList> */}
      <Footer/>
      </>
  );
};
export default App;
