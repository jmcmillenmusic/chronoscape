const router = require('express').Router();
const Location = require('../../models/Location'); 

// Get all cards
router.get('/', async (req, res) => {
  try {
    const location = await Location.findAll();
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching answers', error: error.message });
  }
});

// Get a specific card by ID
router.get('/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card', error: error.message });
  }
});



module.exports = router;