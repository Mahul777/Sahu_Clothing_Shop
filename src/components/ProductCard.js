import React, { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {!imageError ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center">
          <span className="text-gray-500">Image not available</span>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;







