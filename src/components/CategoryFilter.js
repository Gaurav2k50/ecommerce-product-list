import React from "react";
import "../styles/CategoryFilter.css";

const CategoryFilter = ({ categories, setSelectedCategory }) => {
  return (
    <select
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="border p-2"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
