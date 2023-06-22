require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { name, password } = req.body;

        if(!name || !password) {
            return res.status(400).send({success: false, message: 'Username and Password required.', data: null});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await req.db.query(
            `INSERT INTO users (name, password)
                VALUES (:name, :password)`,
            {
                name, hashedPassword
            }
        );

        res.status(200).json({success: true, message: `User created!`, data: null});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const login = async (req, res) => {
    try {
        const { name, sentPassword } = req.body;

        const result = req.db.query(
            `SELECT password FROM users
                WHERE name = :name`,
            {
                name
            }
        );

        if(result[0].length === 0) {
            return res.status(401).json({success: false, message: `User not found.`, data: null});
        }

        const { hashedPassword } = result[0][0];

        if(await bcrypt.compare(sentPassword, hashedPassword)) {
            const accessToken = jwt.sign({name}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
            const refreshToken = jwt.sign({name}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1w'});

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 
            });
            
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000 
            });

            res.status(200).json({success: true, message: `Logged in!`, data: accessToken});
        } else {
            res.status(400).json({success: false, message: 'Wrong Password.', data: null});
        }
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const refresh = (req, res) => {
    try {
        const refreshToken = req.cookies['refreshToken'];

        if(!refreshToken){
            return res.status(401).send({success: false, message: `No token.`, data: null});
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,  user) => {
            if(err || !user.name) {
                return res.status(403).send({success: false, message: err || 'JWT error!', data: null});
            }
            
            const accessToken = jwt.sign({name: user.name}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'});
            res.status(200).send({success: false, message: 'Refreshed', data: accessToken});
        });

    } catch (error) {
        res.status(400).send({success: false, message: error, data: null});
    }
}

module.exports = {
    createUser,
    login,
    refresh
}