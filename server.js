const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/brochure', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'brochure.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});