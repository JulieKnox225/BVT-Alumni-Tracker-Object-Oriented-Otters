const express = require('express');
const router = express.Router();

// Import the functions from plantController.js
const {
  getAllPlants,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
} = require('../../controllers/plantController');

// Plant search endpoint
router.get('/search', getAllPlants);

// Other plant-related endpoints
router.get('/', getAllPlants);
router.post('/', createPlant);
router.put('/:id', updatePlant);
router.delete('/:id', deletePlant);

module.exports = router;
