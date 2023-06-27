const express = require('express');
const router = express.Router();
const { getAllAlumni, createAlumni, updateAlumni, getAlumniByName, getAlumniById, getAlumniByYear } = require('../../controllers/alumniControllers');
const authenticateToken = require('../../middleware/authenticateMiddle');

router
    .get('/', authenticateToken, getAllAlumni)
    .post('/', authenticateToken, createAlumni)
    .put('/:id', authenticateToken, updateAlumni)
    //these **need** to be replaced by one search function because they do not work separately. My version is at top of alumniControllers.js :)
    // .get('/:id', authenticateToken, getAlumniById)
    // .get('/:name', authenticateToken, getAlumniByName)
    // .get('/:year', authenticateToken, getAlumniByYear)
;

module.exports = router;