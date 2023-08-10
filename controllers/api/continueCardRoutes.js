const router = require('express').Router();
const ContinueCard = require('../../models/ContinueCard'); 

// Get all cards
router.get('/', async (req, res) => {
    try {
      const continueCards = await ContinueCard.findAll();
      res.json(continueCards);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching cards', error: error.message });
    }
  });
  
  // Get a specific card by ID
  router.get('/:id', async (req, res) => {
    try {
      const continueCard = await ContinueCard.findByPk(req.params.id);
      if (continueCard) {
        res.json(continueCard);
      } else {
        res.status(404).json({ message: 'Card not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching card', error: error.message });
    }
  });
  
  
  
  module.exports = router;