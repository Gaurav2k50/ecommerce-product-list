import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortingOptions from "./components/SortingOptions";
import "./App.css";

const AppContent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categories, setCategories] = useState([]);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCategories([...new Set(data.map((product) => product.category))]);
      });
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    );

  if (sortOption === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="filters-container">
        <CategoryFilter
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <SortingOptions setSortOption={setSortOption} />
      </div>
      <Routes>
        <Route path="/" element={<ProductList products={filteredProducts} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
