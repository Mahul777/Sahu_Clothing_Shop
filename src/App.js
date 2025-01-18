import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Notification from './components/Notification';
import AboutUs from './pages/AboutUs';
import CustomerService from './pages/CustomerService';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setNotification(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header cartItemsCount={cart.length} />
        <main className="flex-grow container mx-auto px-4 py-8">
          {notification && <Notification message={notification} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryName"
              element={<ProductList addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








