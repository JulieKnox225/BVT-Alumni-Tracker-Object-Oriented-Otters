require('dotenv').config();
const db = require('./config/fakeAlumniConfig');
// const db = require('./config/alumniConfig');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use((req, res, next) => {
    const origin = req.headers.origin;
    
    // http://localhost:5000 <- orignal
    if(origin == 'http://127.0.0.1:5173' || origin == 'http://localhost:5173' || origin == 'http://localhost:5000') {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
});
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5000', 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(db);
app.use('/', require('./routes/auth/authentication'));
app.use('/', require('./routes/api/alumniRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));