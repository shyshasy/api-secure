// src/app.js
const express = require('express');
const app = express();

// Middleware basique pour les requêtes JSON
app.use(express.json());

// Endpoint GET simple
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world' });
});

module.exports = app;
