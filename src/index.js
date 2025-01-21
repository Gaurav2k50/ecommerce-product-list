import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
