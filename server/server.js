const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test route to confirm it's running
app.get('/', (req, res) => {
  res.send('✅ EigenLayer API is working!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
