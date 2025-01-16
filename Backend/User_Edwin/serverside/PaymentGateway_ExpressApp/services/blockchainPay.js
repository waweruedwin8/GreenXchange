require('dotenv').config();
const axios = require('axios');

const API_BASE_URL = 'https://api.blockchain.com/v3/payments';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.BLOCKCHAIN_API_KEY}`,
};

// Create a Payment Request
const createPaymentRequest = async (amount, currency, callbackUrl) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/payment-requests`,
      { amount, currency, callbackUrl },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating payment request:', error.response.data);
    throw error;
  }
};

// Check Payment Status
const checkPaymentStatus = async (paymentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/payment-requests/${paymentId}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error checking payment status:', error.response.data);
    throw error;
  }
};

module.exports = { createPaymentRequest, checkPaymentStatus };
