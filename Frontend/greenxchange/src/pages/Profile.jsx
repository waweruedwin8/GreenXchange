import React from 'react'; // Remove useState if unnecessary

function Profile({ walletConnected, onConnectWallet }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-6">
        <h2 className="text-lg">Wallet Status:</h2>
        {walletConnected ? (
          <p className="text-green-600">Connected</p>
        ) : (
          <>
            <p className="text-red-600">Not Connected</p>
            <button
              onClick={onConnectWallet}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Connect Wallet
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
