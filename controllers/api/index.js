const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const continueCardRoutes = require('./continueCardRoutes');

router.use('/cards', cardRoutes);
router.use('/continuecards', continueCardRoutes);

module.exports = router;