const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

// Payment routes
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
