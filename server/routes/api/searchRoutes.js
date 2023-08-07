const express = require('express');
const router = express.Router();
const searchController = require('server/routes/api/searchRoutes');

router.get('/alumni', searchController.searchAlumni);
router.get('/alumniRoutes')