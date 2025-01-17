import React, { useState } from 'react';
import WalletModal from '../components/WalletModal';

function Profile({ walletConnected, onConnectWallet }) {
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnectClick = () => {
    setShowWalletModal(true);
  };

  const handleWalletSelect = (wallet) => {
    setShowWalletModal(false);
    onConnectWallet(wallet);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700">Wallet Status:</h2>
          {walletConnected ? (
            <p className="mt-2 text-green-600 font-medium">Connected</p>
          ) : (
            <>
              <p className="mt-2 text-red-600 font-medium">Not Connected</p>
              <button
                onClick={handleConnectClick}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              >
                Connect Wallet
              </button>
            </>
          )}
        </div>
      </div>
      {showWalletModal && (
        <WalletModal
          onClose={() => setShowWalletModal(false)}
          onSelectWallet={handleWalletSelect}
        />
      )}
    </div>
  );
}

export default Profile;
