import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>Email: support@sahuclothingshop.com</p>
        <p>Phone: +91 123 456 7890</p>
        <p>Address: 123 Fashion Street, Mumbai, Maharashtra 400001, India</p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border rounded px-3 py-2" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;



