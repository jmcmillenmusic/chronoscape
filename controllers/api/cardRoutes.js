const router = require('express').Router();
const Card = require('../../models/Card'); 

// Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards', error: error.message });
  }
});

// Get a specific card by ID
router.get('/:id', async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id);
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card', error: error.message });
  }
});



module.exports = router;