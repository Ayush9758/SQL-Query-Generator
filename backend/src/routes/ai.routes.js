const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

// POST /api/ai/generate
router.post('/generate', aiController.generateSQL);

module.exports = router;
