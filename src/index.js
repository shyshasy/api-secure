// src/server.js
const app = require('./app');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
