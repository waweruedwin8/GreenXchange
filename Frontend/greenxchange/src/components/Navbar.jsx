import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GreenXchange</h1>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-300">Home</Link>
          <Link to="/marketplace" className="hover:text-green-300">Marketplace</Link>
          <Link to="/profile" className="hover:text-green-300">Profile</Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
