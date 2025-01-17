import React from 'react';

function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="mt-4">Your cart is empty.</p>
        ) : (
          <>
            <div className="mt-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onDecrease(item.id)}
                      className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onIncrease(item.id)}
                      className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
