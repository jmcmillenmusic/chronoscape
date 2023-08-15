const router = require('express').Router();
const withAuth = require('../utils/auth');
const Question = require('../models/Question')
const Ending = require('../models/Ending')
const Answer = require('../models/Answer')
const Location = require('../models/Location')
const User = require('../models/User')

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


      let userData = null;
      if(req.session.user_id)
      {
        userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] }
        });
      }

      
      const questions = questionData.map((question) => question.get({ plain: true }));


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

      let userData = null;
      if(req.session.user_id)
      {
        userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] }
        });
      }
  
      const questions = questionData.map((question) => question.get({ plain: true }));


    const user = userData ? userData.get({ 
      plain: true,
      attributes: ['id', 'name', 'email', 'mpf', 'traveler', 'void']
    }) : null;
  
      // Pass serialized data and session flag into template
      res.render('route2', { 
        questions, user
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
  
      let userData = null;
      if(req.session.user_id)
      {
        userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] }
        });
      }
  
      const questions = questionData.map((question) => question.get({ plain: true }));


    const user = userData ? userData.get({ 
      plain: true,
      attributes: ['id', 'name', 'email', 'mpf', 'traveler', 'void']
    }) : null;

      res.render('route3', { 
        questions, user
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/endroute', async (req, res) => {
    try {
      const endingData = await Ending.findAll({});
  
      let userData = null;
      if(req.session.user_id)
      {
        userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] }
        });
      }

      const ending = endingData.map((ending) => ending.get({ plain: true }));
      

    const user = userData ? userData.get({ 
      plain: true,
      attributes: ['id', 'name', 'email', 'mpf', 'traveler', 'void']
    }) : null;

      res.render('endroute', { 
        ending, user
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