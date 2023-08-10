const sequelize = require('../config/connection');
const Card = require('../models/Card');
const ContinueCard = require('../models/ContinueCard');
// const { Card } = require('../models');
const cardData = require('./cardData.json');
const continueCardData = require('./continueCardData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const cards = await Card.bulkCreate(cardData, {
        returning: true,
      });

      const continueCards = await ContinueCard.bulkCreate(continueCardData, {
        returning: true,
      });


      process.exit(0);
};  

seedDatabase();