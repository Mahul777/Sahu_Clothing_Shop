import React from 'react';

const Returns = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Returns and Exchanges</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Return Policy</h2>
        <p className="mb-2">
          We offer a 30-day return policy for all unworn items in their original condition. 
          To be eligible for a return, your item must be unused and in the same condition that you received it.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">How to Return an Item</h2>
        <ol className="list-decimal list-inside mb-2">
          <li>Log into your account and go to your order history</li>
          <li>Select the item(s) you wish to return</li>
          <li>Choose a reason for the return</li>
          <li>Print the return label</li>
          <li>Pack the item securely and attach the return label</li>
          <li>Drop off the package at your nearest post office or courier pickup point</li>
        </ol>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Refunds</h2>
        <p className="mb-2">
          Once we receive your return, we will inspect it and notify you that we have received your returned item. 
          We will immediately notify you on the status of your refund after inspecting the item.
        </p>
        <p className="mb-2">
          If your return is approved, we will initiate a refund to your original method of payment. 
          You will receive the credit within a certain amount of days, depending on your card issuer's policies.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Exchanges</h2>
        <p>
          If you need to exchange an item for a different size or color, please return the original item for a refund and place a new order for the desired item.
        </p>
      </section>
    </div>
  );
};

export default Returns;



