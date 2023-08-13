const router = require('express').Router();
const Questions = require('../../models/Questions'); 

// Get all cards
router.get('/', async (req, res) => {
  try {
    const questions = await Questions.findAll();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching answers', error: error.message });
  }
});

// Get a specific card by ID
router.get('/:id', async (req, res) => {
  try {
    const questions = await Questions.findByPk(req.params.id);
    if (questions) {
      res.json(questions);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card', error: error.message });
  }
});



module.exports = router;