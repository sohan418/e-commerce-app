// ProductCart.js
import React from 'react';
import './ProductCard.css';  



const ProductCart = ({ products }) => {
  const phoneNumber = '+919761408644';
  const message = 'Hello, I am interested in this product.';

  // Construct the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const handleAddToCart = (productName) => {
    // You can implement your logic for adding the product to the cart here
    console.log(`Added ${productName} to the cart`);
  };
  return (
    <div className="product-cart">
      
      {products.map((product) => (
        <div key={product.id} className="cart-item">
          <div className="card">
          <a href={whatsappLink}> <img src={product.imageUrl} alt={product.name} className="card-image" /></a>
            <div className="card-body">
              <a href={whatsappLink}><h3 className="card-title">{product.name}</h3></a>
              <p className="card-price">{product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product.name)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
