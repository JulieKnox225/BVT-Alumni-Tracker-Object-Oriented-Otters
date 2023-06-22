const express = require('express');
const router = express.Router();
const { createUser, login, refresh } = require('../../controllers/authcontrollers');

router
    .post('/user', createUser)
    .post('/login', login)
    .post('/refresh', refresh);

module.exports = router;