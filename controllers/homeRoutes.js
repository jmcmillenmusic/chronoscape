const router = require('express').Router();
const withAuth = require('../utils/auth');
const Card = require('../models/Card'); 
const ContinueCard = require('../models/ContinueCard');
const Question = require('../models/Question')
const Answer = require('../models/Answer')
const Location = require('../models/Location')
const User = require('../models/User')


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


      let userData = null;
      if(req.session.user_id)
      {
        userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] }
        });
      }
      // const userData = await User.findByPk(req.session.user_id, {
      //   attributes: { exclude: ['password'] }
      // });
      
      
  
      // Serialize data so the template can read it
      const questions = questionData.map((question) => question.get({ plain: true }));


      // const users = userData.map((user) => user.get({ plain: true }));
      // const users = userData.get({ 
      //   plain: true,
      // attributes: ['id', 'name', 'email', 'mpf', 'traveler', 'void'] });
      // console.log(questions);

      const user = userData ? userData.get({ 
        plain: true,
        attributes: ['id', 'name', 'email', 'mpf', 'traveler', 'void']
      }) : null;

    const logged_in = req.session.logged_in || false;

      
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        questions, user, logged_in
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
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
      });
  
      const user = userData.get({ 
        plain: true,
      attributes: ['id', 'name', 'email', 'mpf', 'traveler', 'void'] });
  
      res.render('profile', {
        user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;