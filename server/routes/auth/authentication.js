const express = require('express');
const router = express.Router();
const { createUser, login, refresh, userData, updatePassword, updateUser } = require('../../controllers/authcontrollers');
const authenticateToken = require('../../middleware/authenticateMiddle');

router
    .post('/user', createUser)
    .post('/login', login)
    .get('/refresh', refresh)
    .get('/user', authenticateToken, userData)
    .put('/password', authenticateToken, updatePassword)
;

module.exports = router;