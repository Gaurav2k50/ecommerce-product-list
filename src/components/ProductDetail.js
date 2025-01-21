import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <p className="rating">Rating: {product.rating.rate}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
