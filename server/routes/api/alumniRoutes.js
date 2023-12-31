const express = require('express');
const router = express.Router();
const path = require('path');
const alumniController = require('../../controllers/alumniController');
const authenticateToken = require('../../middleware/authenticateMiddle');


// Alumni search endpoint
router.get('/search', authenticateToken,  alumniController.searchAlumni);
router.get('/', alumniController.getAllAlumni);

// Other alumni-related endpoints
router.post('/', authenticateToken, alumniController.createAlumni);
router.put('/', alumniController.updateAlumni);
router.post('/profile', authenticateToken, alumniController.editProfile);

module.exports = router;
