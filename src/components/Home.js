import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Shirts', 'T-shirts', 'Jeans', 'Hankies', 'Socks'];

function Home() 
{
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Sahu Clothing Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase()}`}  //it create unique link ->/category/shirts
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{category}</h2>
            <p className="text-gray-600">Browse our {category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

