import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import React, { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  const [walletConnected, setWalletConnected] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const connectWallet = () => {
    // Mock wallet connection logic
    setWalletConnected(true);
    alert('Wallet connected!');
  };

  const promptWallet = () => {
    alert('Please connect your wallet first!');
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace onAddToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemoveFromCart={removeFromCart}
              walletConnected={walletConnected}
              onPromptWallet={promptWallet}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile walletConnected={walletConnected} onConnectWallet={connectWallet} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
