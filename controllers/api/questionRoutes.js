const router = require('express').Router();
const { Question, Answer, Location } = require('../../models'); 


// Get all cards
router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching answers', error: error.message });
  }
});

// Get a specific card by ID
router.get('/:id', async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await Question.findByPk(questionId, {
      raw: false,
      include: {
        model: Answer,
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
          },
        ],
      },
    });

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;