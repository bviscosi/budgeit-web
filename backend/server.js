// Core Modules
const express = require('express');
const cors = require('cors');

// Configurations
require('dotenv').config({ path: './config.env' });

// Custom Modules
const dbo = require('./db/conn');
const recordRoutes = require('./routes/record');

// Constants
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', recordRoutes);

app.use(require('./routes/record'));

// Database Connection
dbo.connectToDb((err) => {
	if (err) console.error(err);
});

// Server Start
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
