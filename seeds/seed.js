const sequelize = require('../config/connection');
const { Question, Answer, Location, Card, ContinueCard, User, Ending } = require('../models');
const cardData = require('./cardData.json');
const continueCardData = require('./continueCardData.json');
const questions = require('./questionData.json');
const answers = require('./answersData.json');
const locations = require('./locationData.json');
const users = require('./userData.json');
const endings = require('./endingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const cards = await Card.bulkCreate(cardData, {
    returning: true,
  });

  const continueCards = await ContinueCard.bulkCreate(continueCardData, {
    returning: true,
  });

  const question = await Question.bulkCreate(questions, {
    returning: true,
  });

  const answer = await Answer.bulkCreate(answers, {
    returning: true,
  });

  const location = await Location.bulkCreate(locations, {
    returning: true,
  });

  const uses = await User.bulkCreate(users, {
    returning: true,
  });

  const endings = await Ending.bulkCreate(endings, {
    returning: true,
  });
    
  process.exit(0);
};  

seedDatabase();