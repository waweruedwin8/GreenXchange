const { createPaymentRequest, checkPaymentStatus } = require('../services/blockchain');

// Create a new payment
const createPayment = async (req, res) => {
  const { amount, currency, callbackUrl } = req.body;
  try {
    const payment = await createPaymentRequest(amount, currency, callbackUrl);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment request' });
  }
};

// Check payment status
const getPaymentStatus = async (req, res) => {
  const { paymentId } = req.params;
  try {
    const paymentStatus = await checkPaymentStatus(paymentId);
    res.status(200).json(paymentStatus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve payment status' });
  }
};

module.exports = { createPayment, getPaymentStatus };
