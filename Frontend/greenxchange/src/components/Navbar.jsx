import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaStore, FaUser } from 'react-icons/fa'; // Import icons

function Navbar({ cartCount }) {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GreenXchange</h1>
        <div className="flex items-center space-x-6">
          {/* Home Link */}
          <Link to="/" className="flex items-center hover:text-green-300">
            <FaHome className="mr-2" size={20} />
            Home
          </Link>

          {/* Marketplace Link */}
          <Link to="/marketplace" className="flex items-center hover:text-green-300">
            <FaStore className="mr-2" size={20} />
            Marketplace
          </Link>

          {/* Profile Link */}
          <Link to="/profile" className="flex items-center hover:text-green-300">
            <FaUser className="mr-2" size={20} />
            Profile
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className="relative flex items-center">
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
