const Card = require('./Card');
const ContinueCard = require('./ContinueCard');
const Questions = require('./Question');
const Answers = require('./Answer');
const Location = require('./Location');

Questions.hasMany(Answers, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
  });

  Answers.belongsTo(Questions, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
  });

  Answers.hasMany(Answers, {
    foreignKey: 'answer_id',
    onDelete: 'CASCADE'
  });

  Answers.belongsTo(Answers, {
    foreignKey: 'answer_id',
    onDelete: 'CASCADE'
  });

  Answers.hasOne(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
  });
  
  
  Location.belongsTo(Answers, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
  });
  
  module.exports = { Card, ContinueCard, Questions, Answers, Locations };