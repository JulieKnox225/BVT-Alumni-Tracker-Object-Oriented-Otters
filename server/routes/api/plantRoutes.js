const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Plant search endpoint
router.get('/search', plantController.searchPlants);

// Other plant-related endpoints
router.get('/', plantController.getAllPlants);
router.post('/', plantController.createPlant);
router.put('/:id', plantController.updatePlant);
router.delete('/:id', plantController.deletePlant);

module.exports = router;
