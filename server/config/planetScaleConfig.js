const mysql = require('mysql2/promise');
require('dotenv').config();

async function connectDataBase() {
  try {
    const connection = mysql.createConnection(process.env.DATABASE_URL);
    console.log(connection);
    
    return connection;
  } catch (err) {
    console.log(`Error in connectDatabase`, err);
    throw err;
  }
};

module.exports = connectDataBase;
