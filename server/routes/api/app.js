const express = require('express');
const mysql = require('mysql2/promise'); // Import the mysql2 package

const app = express();

const alumniRoutes = require('./routes/alumniRoutes');
const plantRoutes = require('./routes/planetRoutes');

// Middleware to connect to the database
const connectToDatabase = async (req, res, next) => {
    try {
        const db = await mysql.createConnection({
            host: 'aws.connect.psdb.cloud',
            user: '52gnku7iwoyq7160x9v0',
            password: 'root',
            database: 'alumnidb',
        });

        // Attach the database connection to the request object
        req.db = db;

        next();
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).json({ success: false, message: 'Error connecting to the database', data: null });
    }
};

// Use the middleware to connect to the database for all routes
app.use(connectToDatabase);

// Other middleware and configurations go here
app.use('/api/plants', plantRoutes);

// Routes and other configurations

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
