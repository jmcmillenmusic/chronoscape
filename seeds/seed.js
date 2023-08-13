const sequelize = require('../config/connection');
const Question = require('../models/Question');
const Answers = require('../models/Answer');
const Location = require('../models/Location');

// const { Card } = require('../models');
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
      
    const answer = await Answers.bulkCreate(answers, {
        returning: true,
      });

    

      process.exit(0);
};  

seedDatabase();