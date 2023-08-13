const sequelize = require('../config/connection');
const { Question, Answer, Location} = require('../models');
const questions = require('./questionData.json');
const answers = require('./answersData.json');
const locations = require('./locationData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const question = await Question.bulkCreate(questions, {
        returning: true,
      });

    const location = await Location.bulkCreate(locations, {
        returning: true,
      });
      
    const answer = await Answer.bulkCreate(answers, {
        returning: true,
      });

    

      process.exit(0);
};  

seedDatabase();