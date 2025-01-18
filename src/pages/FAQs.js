import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: "What are your shipping rates?",
      answer: "We offer free shipping on orders over ₹1000. For orders under ₹1000, a flat rate of ₹100 is charged."
    },
    {
      question: "How long does shipping take?",
      answer: "Typically, orders are processed within 1-2 business days. Shipping within India usually takes 3-5 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in their original condition. Please visit our Returns page for more information."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. We hope to expand our shipping options in the future."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this to track your package on our website."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;


