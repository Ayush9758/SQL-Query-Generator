const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes);

// Root Endpoint
app.get('/', (req, res) => res.send('Welcome to the Cosmic API Gateway'));

module.exports = app;
