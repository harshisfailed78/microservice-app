const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Endpoint to forward requests to VM2
app.get('/data', async (req, res) => {
  try {
    const response = await axios.get('http://192.168.0.102:5000/backend');  // Updated IP
    res.json({ data: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`API Gateway running on http://localhost:${port}`);
});
