const router = require('express').Router();
const Card = require('../models/Card'); 
const ContinueCard = require('../models/ContinueCard');

router.get('/', async (req, res) => {
    try {
        //Below loads all cards and shows the description and answer choices
        // const cardData = await Card.findAll({attributes: ['description', 'answerChoice1', 'answerChoice2', 'answerChoice3']});

        const cardData = await ContinueCard.findByPk(1, {attributes: ['description', 'continueButton']});

        //Show this for now
        res.status(200).json(cardData);
        //When handlebars are set up, can do something like the below code to render homepage
        // const cards = cardData.map((card) => card.get({ plain: true }));
        // res.render('homepage', {cards});
        
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;