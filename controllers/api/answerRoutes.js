const router = require('express').Router();
const { Question, Answer, Location } = require('../../models'); 

// Get all cards
router.get('/', async (req, res) => {
  try {
    const answer = await Answer.findAll({
      raw: false,
      include: {
        model: Answer, // Include child answers for the child answers
        as: 'ChildAnswers',
        include: [
          {
            model: Location,
          },
        ],
        include: [
          {
            model: Location,
          },
        ],
      },
    });

    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    res.json(answer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching answers', error: error.message });
  }
});

// Get a specific card by ID
router.get('/:id', async (req, res) => {
  const answerId = req.params.id;
  try {
    const answer = await Answer.findByPk(answerId, {
      raw: false,
      include: [
        {
          model: Location,
        },
        {
          model: Answer,
          as: 'ChildAnswers',
          include: [
            {
              model: Location,
            },
          ],
          include: [
            {
              model: Question,
            },
          ],
        },
      ],
    });

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