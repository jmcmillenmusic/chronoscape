const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const continueCardRoutes = require('./continueCardRoutes');
const Answer = require('./answerRoutes');
const Question = require('./questionRoutes');
const Location = require('./locationRoutes');
const userRoutes = require('./userRoutes');

router.use('/cards', cardRoutes);
router.use('/continuecards', continueCardRoutes);
router.use('/answer', Answer);
router.use('/question', Question);
router.use('/location', Location);
router.use('/users', userRoutes);

module.exports = router;