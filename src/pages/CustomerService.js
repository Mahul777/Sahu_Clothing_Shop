import React from 'react';
import { Link } from 'react-router-dom';

const CustomerService = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Customer Service</h1>
      <p className="mb-4">
        At Sahu Clothing Shop, we're committed to providing excellent customer service. 
        If you have any questions or concerns, please don't hesitate to reach out to us.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><Link to="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link></li>
        <li><Link to="/faqs" className="text-blue-600 hover:underline">Frequently Asked Questions</Link></li>
        <li><Link to="/shipping" className="text-blue-600 hover:underline">Shipping Information</Link></li>
        <li><Link to="/returns" className="text-blue-600 hover:underline">Returns and Exchanges</Link></li>
      </ul>
      <p>
        Our customer service team is available Monday through Friday, 9am to 5pm IST. 
        We strive to respond to all inquiries within 24 hours.
      </p>
    </div>
  );
};

export default CustomerService;



