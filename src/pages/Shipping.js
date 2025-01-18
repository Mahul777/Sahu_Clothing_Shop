import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Shipping Rates</h2>
        <p className="mb-2">We offer the following shipping options:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Free shipping on orders over ₹1000</li>
          <li>Flat rate of ₹100 for orders under ₹1000</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Delivery Times</h2>
        <p className="mb-2">Our estimated delivery times are as follows:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Metro cities: 3-5 business days</li>
          <li>Other cities: 5-7 business days</li>
          <li>Remote areas: 7-10 business days</li>
        </ul>
        <p>Please note that these are estimates and actual delivery times may vary.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Order Tracking</h2>
        <p>
          Once your order is shipped, you will receive a tracking number via email. 
          You can use this number to track your package on our website or the courier's website.
        </p>
      </section>
    </div>
  );
};

export default Shipping;


