export const connectWallet = async (wallet) => {
    if (wallet === 'metamask') {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
      } else {
        alert('MetaMask is not installed!');
      }
    } else if (wallet === 'corewallet') {
      // Core Wallet integration logic here
      alert('Core Wallet selected!');
    } else if (wallet === 'trustwallet') {
      // Trust Wallet integration logic here
      alert('Trust Wallet selected!');
    }
  };
  