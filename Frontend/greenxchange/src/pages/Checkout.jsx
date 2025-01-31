import React from 'react';

function Checkout({ walletConnected, cart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (!walletConnected) {
      alert('Please connect your wallet to proceed.');
      return;
    }
    alert('Payment successful!');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
        <div className="mt-6">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-gray-700">Order Summary:</h2>
              <ul className="mt-4 space-y-2">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Total: ${totalPrice}</h3>
                <button
                  onClick={handlePayment}
                  className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
