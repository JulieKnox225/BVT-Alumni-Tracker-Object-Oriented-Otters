// Your existing back-end code

const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
require('dotenv').config();

// ... Other code ...

// Database connection setup
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "remote",
  password: "pass",
  database: "alumniDatabase",
});

// Middleware for connecting to the database
async function connectDataBase(req, _, next) {
  try {
    req.db = await connection.getConnection();
    req.db.connection.config.namedPlaceholders = true;

    await req.db.query(`SET SESSION sql_mode = "TRADITIONAL"`);
    await req.db.query(`SET time_zone = '-8:00'`);

    await next();

    req.db.release();
  } catch (err) {
    console.log(`Error in connectDatabase`, err);

    if (req.db) req.db.release();
    throw err;
  }
}

// Apply the middleware to the app
app.use(connectDataBase);

// Define a route for the search endpoint
app.get('/api/search', async (req, res) => {
  try {
    // Retrieve the search query from the request parameters or query string
    const { query } = req.query;

    // Perform the search operation in your database
    const results = await req.db.query('SELECT * FROM your_table WHERE column LIKE ?', [`%${query}%`]);

    // Send the search results as the response
    res.json(results);
  } catch (error) {
    console.error('Error performing search:', error);
    res.status(500).json({ error: 'An error occurred while performing the search.' });
  }
});

// ... Other routes and code ...

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
