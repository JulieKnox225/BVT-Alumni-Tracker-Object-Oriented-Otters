const express = require('express');
const router = express.Router();
const { getAllAlumni, createAlumni, updateAlumni, editProfile, getAlumniByName, getAlumniById, getAlumniByYear } = require('../../controllers/alumniControllers');
const authenticateToken = require('../../middleware/authenticateMiddle');

router
    //NEEDS TO HAVE AUTHENTICATION MIDDLEWARE ADDED
    .get('/', getAllAlumni)
    .post('/', authenticateToken, createAlumni)
    .put('/', authenticateToken, updateAlumni)
    .post('/profile', authenticateToken, editProfile)
    //these **need** to be replaced by one search function because they do not work separately. My version is at top of alumniControllers.js :)
    // .get('/:id', authenticateToken, getAlumniById)
    // .get('/:name', authenticateToken, getAlumniByName)
    // .get('/:year', authenticateToken, getAlumniByYear)
;

module.exports = router;