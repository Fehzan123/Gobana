import React, { useState, useEffect } from 'react';
import './FetchData.css';

const FetchData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))  // Accessing the 'products' array from the data
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      <h1>Fetched Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <img src={product.thumbnail} alt={product.title} />  {/* Changed to 'thumbnail' based on API */}
            <p>Rating: {product.rating}</p>  {/* Assuming 'rating' is directly available */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
