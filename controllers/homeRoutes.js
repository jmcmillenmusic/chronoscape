const router = require('express').Router();
const Card = require('../models/Card'); 
const ContinueCard = require('../models/ContinueCard');

router.get('/', async (req, res) => {
    try {
        //Below loads all cards and shows the description and answer choices
        // const cardData = await Card.findAll({attributes: ['description', 'answerChoice1', 'answerChoice2', 'answerChoice3']});

        const continueCardData = await ContinueCard.findByPk(1, {attributes: ['title', 'description']});

        //Show this for now
        // res.status(200).json(cardData);
        //When handlebars are set up, can do something like the below code to render homepage
        const continueCard = continueCardData.get({ plain: true }); 
        // console.log("LOOK AT THIS" + cardData.title + cardData.description);
        res.render('homepage', { continueCard }); // Pass the continueCard data to the view
        
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;