const sequelize = require('../config/connection');
const { Question, Answer, Location, User, Ending } = require('../models');
const questions = require('./questionData.json');
const answers = require('./answersData.json');
const locations = require('./locationData.json');
const users = require('./userData.json');
const ending = require('./endingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

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

  const endings = await Ending.bulkCreate(ending, {
    returning: true,
  });
    
  process.exit(0);
};  

seedDatabase();