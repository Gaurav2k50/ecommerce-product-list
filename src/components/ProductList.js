import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  const { addToCart, getTotalItems } = useCart();

  // Local state to manage the success message
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
    const totalItems = getTotalItems();
    console.log(`Total items in cart: ${totalItems}`);

    setMessage(`${product.title} has been added to the cart!`);

    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <div className="product-list">
      {message && <div className="small-message">{message}</div>}
      {/* Display success message */}
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <span className="product-btn">
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} className="view-details-link">
              View Details
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
