const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const continueCardRoutes = require('./continueCardRoutes');
const Answer = require('./answerRoutes');
const Question = require('./questionRoutes');
const Location = require('./locationRoutes');

router.use('/cards', cardRoutes);cd
router.use('/continuecards', continueCardRoutes);
router.use('/answers', Answer);
router.use('/questions', Question);
router.use('/location', Location);

module.exports = router;