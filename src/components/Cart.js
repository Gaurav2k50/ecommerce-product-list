import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalItems } = useCart();

  const handleQuantityChange = (id, e) => {
    updateQuantity(id, parseInt(e.target.value, 10));
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart ({getTotalItems()} items)</h2>
      {/* Display total items */}
      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="cart-item-info">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cart-item-image"
                />
                <div>
                  <h3 className="cart-item-title">{product.title}</h3>
                  <p className="cart-item-category">{product.category}</p>
                </div>
              </div>
              <div className="cart-item-quantity">
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, e)}
                  min="1"
                  className="quantity-input"
                />
                <p className="cart-item-price">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
