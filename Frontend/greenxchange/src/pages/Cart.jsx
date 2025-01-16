import React from 'react'; // Remove useState if unnecessary
import CartItem from '../components/CartItem';

function Cart({ cart, onRemoveFromCart, walletConnected, onPromptWallet }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!walletConnected) {
      onPromptWallet();
      return;
    }
    alert('Checkout successful!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemoveFromCart} />
          ))}
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
