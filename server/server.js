require('dotenv').config();
// const db = require('./config/alumniConfig'); //NEEDS TO BE CONNECTED TO ENV
const cookieParser = require('cookie-parser')
const cors = require('cors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
// app.use(db);
app.use('/', require('./routes/api/alumni'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));