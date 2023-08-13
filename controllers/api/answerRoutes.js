const router = require('express').Router();
const Answer = require('../../models/Answer'); 

// Get all cards
router.get('/', async (req, res) => {
  try {
    const answer = await Answer.findAll();
    res.json(answer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching answers', error: error.message });
  }
});

// Get a specific card by ID
router.get('/:id', async (req, res) => {
  try {
    const answer = await Answer.findByPk(req.params.id);
    if (answer) {
      res.json(answer);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card', error: error.message });
  }
});



module.exports = router;