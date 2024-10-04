// src/routes/hello.route.js
const express = require('express');
const router = express.Router();

// GET /api/hello
router.get('/', (req, res) => {
    res.json({ message: "Hello world" });
});

module.exports = router;
