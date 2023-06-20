const express = require('express');
const router = express.Router();
const { getAllAlumni, getAlumniByName, getAlumniById, getAlumniByYear, createAlumni, updateAlumni } = require('../../controllers/alumniControllers');
const authenticateToken = require('../../middleware/authenticateMiddle');

router
    .get('/', authenticateToken, getAllAlumni)
    .get('/:id', authenticateToken, getAlumniById)
    .get('/:name', authenticateToken, getAlumniByName)
    .get('/:year', authenticateToken, getAlumniByYear)
    .post('/', authenticateToken, createAlumni)
    .put('/:id', authenticateToken, updateAlumni)
;

module.exports = router;