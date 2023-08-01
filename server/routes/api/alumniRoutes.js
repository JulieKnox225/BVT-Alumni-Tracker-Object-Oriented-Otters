const express = require('express');
const router = express.Router();
const path = require('path');
const alumniController = require('../../controllers/alumniController');


// Alumni search endpoint
router.get('/search', alumniController.searchAlumni);
router.get('/', alumniController.getAllAlumni);

// Other alumni-related endpoints
router.post('/', alumniController.createAlumni);
router.put('/', alumniController.updateAlumni);
router.put('/profile', alumniController.editProfile);

module.exports = router;
