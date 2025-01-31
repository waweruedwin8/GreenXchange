const express = require('express');
const { createPayment, getPaymentStatus } = require('../controllers/paymentController');
const router = express.Router();

router.post('/create', createPayment); // Route for creating a payment
router.get('/status/:paymentId', getPaymentStatus); // Route for checking payment status

module.exports = router;
