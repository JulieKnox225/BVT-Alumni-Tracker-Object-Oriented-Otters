// Sample in-memory array to store plant data
const plants = [];

// Function to get all plants
const getAllPlants = (req, res) => {
  res.status(200).json({ success: true, data: plants });
};

// Function to get a single plant by ID
const getPlantById = (req, res) => {
  const plantId = req.params.id;
  const plant = plants.find((plant) => plant.id === plantId);

  if (!plant) {
    return res.status(404).json({ success: false, message: 'Plant not found' });
  }

  res.status(200).json({ success: true, data: plant });
};

// Function to create a new plant
const createPlant = (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ success: false, message: 'Name and description are required' });
  }

  const newPlant = {
    id: String(plants.length + 1),
    name,
    description,
  };

  plants.push(newPlant);

  res.status(201).json({ success: true, data: newPlant });
};

// Function to update an existing plant
const updatePlant = (req, res) => {
  const plantId = req.params.id;
  const { name, description } = req.body;

  const plantToUpdate = plants.find((plant) => plant.id === plantId);

  if (!plantToUpdate) {
    return res.status(404).json({ success: false, message: 'Plant not found' });
  }

  plantToUpdate.name = name || plantToUpdate.name;
  plantToUpdate.description = description || plantToUpdate.description;

  res.status(200).json({ success: true, data: plantToUpdate });
};

// Function to delete a plant
const deletePlant = (req, res) => {
  const plantId = req.params.id;
  const plantIndex = plants.findIndex((plant) => plant.id === plantId);

  if (plantIndex === -1) {
    return res.status(404).json({ success: false, message: 'Plant not found' });
  }

  plants.splice(plantIndex, 1);

  res.status(200).json({ success: true, message: 'Plant deleted successfully' });
};

module.exports = {
  getAllPlants,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
};
