const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    database: 'alumnidb',
    username: '52gnku7iwoyq7160x9v0',
    host: 'aws.connect.psdb.cloud',
    password: 'root',
    //TEST
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  }
});

async function connectDataBase(req, _, next) {
  try {
    req.db = await pool.getConnection();
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

module.exports = connectDataBase;
