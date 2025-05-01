const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Create directory structure for components
app.use('/components', express.static(path.join(__dirname, 'public/components')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/brochure', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'brochure.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pricing.html'));
});

app.get('/coming-soon', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'coming-soon.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});