function ProductCard({ product, onAddToCart }) {
    return (
      <div className="bg-white border rounded shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded" />
        <h3 className="text-xl font-bold mt-4 text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-bold mt-2">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  