import React from 'react';
import metamaskIcon from '../assets/icons/metamask.png';
import coreWalletIcon from '../assets/icons/corewallet.png';
import trustWalletIcon from '../assets/icons/trustwallet.png';
import { MdOutlineClose } from 'react-icons/md';

const wallets = [
  { id: 'metamask', name: 'MetaMask', icon: metamaskIcon },
  { id: 'corewallet', name: 'Core Wallet', icon: coreWalletIcon },
  { id: 'trustwallet', name: 'Trust Wallet', icon: trustWalletIcon },
];

function WalletModal({ onClose, onSelectWallet }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Connect Wallet</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => onSelectWallet(wallet.id)}
              className="w-full flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-100"
            >
              <img src={wallet.icon} alt={wallet.name} className="w-8 h-8" />
              <span className="text-gray-800 font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
