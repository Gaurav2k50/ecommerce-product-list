import React from "react";
import "../styles/SortingOptions.css";

const SortingOptions = ({ setSortOption }) => {
  return (
    <div className="sorting-options">
      <button
        className="sort-button"
        onClick={() => setSortOption("price-asc")}
      >
        Sort by Price (Low to High)
      </button>
      <button
        className="sort-button"
        onClick={() => setSortOption("price-desc")}
      >
        Sort by Price (High to Low)
      </button>
      <button
        className="sort-button"
        onClick={() => setSortOption("rating-desc")}
      >
        Sort by Rating
      </button>
    </div>
  );
};

export default SortingOptions;
