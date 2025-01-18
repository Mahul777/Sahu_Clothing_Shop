import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
  const { categoryName } = useParams();
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const categoryProducts = products.filter(
      (product) => product.category === categoryName
    );
    setSortedProducts(categoryProducts);
  }, [categoryName]);

  const handleSort = () => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold capitalize">{categoryName}</h2>
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;


