const router = require('express').Router();
const Card = require('../models/Card'); 
const ContinueCard = require('../models/ContinueCard');
const Question = require('../models/Question')
const Answer = require('../models/Answer')
const Location = require('../models/Location')


router.get('/cards/:id', async (req, res) => {
    try {
        const cardId = req.params.id;
        const cardData = await Card.findByPk(cardId, { raw: true, attributes: ['description', 'answerChoice1', 'answerChoice2', 'answerChoice3'] });

        res.json(cardData); // Return the card data as JSON
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('continueCards/:id', async (req, res) => {
    try {
        const cardId = req.params.id;
        const cardData = await ContinueCard.findByPk(cardId, { raw: true, attributes: ['title', 'description'] });

        res.json(cardData); // Return the card data as JSON
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const questionData = await Question.findAll({
        include: {
          model: Answer,
          include: [
            {
              model: Location,
            },
            {
              model: Answer, // Include child answers for the child answers
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
  
      // Serialize data so the template can read it
      const questions = questionData.map((question) => question.get({ plain: true }));
    //   console.log(questions);
      
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        questions
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/route2', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const questionData = await Question.findAll({
        include: {
          model: Answer,
          include: [
            {
              model: Location,
            },
            {
              model: Answer, // Include child answers for the child answers
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
  
      // Serialize data so the template can read it
      const questions = questionData.map((question) => question.get({ plain: true }));
    //   console.log(questions);
      
  
      // Pass serialized data and session flag into template
      res.render('route2', { 
        questions
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/route3', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const questionData = await Question.findAll({
        include: {
          model: Answer,
          include: [
            {
              model: Location,
            },
            {
              model: Answer, // Include child answers for the child answers
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
  
      // Serialize data so the template can read it
      const questions = questionData.map((question) => question.get({ plain: true }));
    //   console.log(questions);
      
  
      // Pass serialized data and session flag into template
      res.render('route3', { 
        questions
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;