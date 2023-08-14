const router = require('express').Router();
const Card = require('../models/Card'); 
const ContinueCard = require('../models/ContinueCard');
const Question = require('../models/Question')
const Answer = require('../models/Answer')

// router.get('/', async (req, res) => {
//     try {
//         //Below loads all cards and shows the description and answer choices

//         const continueCardData = await ContinueCard.findByPk(1, {attributes: ['title', 'description']});
//         const cardData = await Card.findAll({raw: true, attributes: ['description', 'answerChoice1', 'answerChoice2', 'answerChoice3']})

//         //Show this for now
//         // res.status(200).json(cardData);
//         const continueCard = continueCardData.get({ plain: true }); 
//         // const card = cardData.get({ plain: true }); 
//         // console.log("LOOK AT THIS" + cardData.title + cardData.description);
//         console.log(cardData);
//         res.render('homepage', { continueCard, cardData }); // Pass the continueCard data to the view
        
//     }
//     catch(err)
//     {
//         res.status(500).json(err);
//     }
// });

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
        include: [
          {
            model: Answer,
            attributes: ['answerChoice'],
          },
        ],
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




module.exports = router;