const router = require('express').Router();
const { User } = require('../../models');


// Get a specific card by ID
router.get('/:id', async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await User.findByPk(userID, {
      raw: false,
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  const userID = req.params.id;
  const scores = req.body;
  try {
    const user = await User.findByPk(userID);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.mpf += scores.MPF;
    user.void += scores.Void;
    user.traveler += scores.Traveler;
    
    await user.save();
    res.status(200).json(user);
   

  } catch (err) {
    res.status(500).json(err);
  }
})


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
