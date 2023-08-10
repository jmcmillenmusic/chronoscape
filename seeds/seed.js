const sequelize = require('../config/connection');
const Card = require('../models/Card');
// const { Card } = require('../models');
const cardData = require('./cardData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const cards = await Card.bulkCreate(cardData, {
        returning: true,
      });

      process.exit(0);
};  

seedDatabase();