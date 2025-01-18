import React, { useState } from 'react';

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              {!imageErrors[item.id] ? (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 object-cover rounded mr-4"
                  onError={() => handleImageError(item.id)}
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded mr-4 flex items-center justify-center">
                  <span className="text-xs text-gray-500">No image</span>
                </div>
              )}
              <span>{item.name} x {item.quantity}</span>
            </div>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="City"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Country"
            className="border rounded px-3 py-2"
          />
        </form>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            Credit Card
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            PhonePay
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            PayPal
          </label>
        </div>
      </div>
      <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
        Place Order
      </button>
    </div>
  );
}

export default Checkout;







