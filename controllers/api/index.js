const router = require('express').Router();
const Answer = require('./answerRoutes');
const Question = require('./questionRoutes');
const Location = require('./locationRoutes');
const userRoutes = require('./userRoutes');

router.use('/answer', Answer);
router.use('/question', Question);
router.use('/location', Location);
router.use('/users', userRoutes);

module.exports = router;