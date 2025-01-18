import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                {!imageErrors[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded mr-4 flex items-center justify-center">
                    <span className="text-xs text-gray-500">No image</span>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;






