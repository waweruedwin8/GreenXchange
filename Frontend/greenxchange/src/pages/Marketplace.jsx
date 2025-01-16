import React from 'react'; // Remove useState if unnecessary
import { products } from '../utils/data';
import ProductCard from '../components/ProductCard';

function Marketplace({ onAddToCart }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
