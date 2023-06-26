require('dotenv').config();
const db = require('./config/alumniConfig');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if(origin == 'http://localhost:5000') {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
});
app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true
}));
app.use(express.json());
app.use(db);
app.use('/', require('./routes/api/alumni'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));