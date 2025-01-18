import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartItemsCount }) {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Sahu Clothing Shop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="hover:text-blue-200">
                Cart
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


