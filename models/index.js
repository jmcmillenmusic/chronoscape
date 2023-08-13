const Card = require('./Card');
const ContinueCard = require('./ContinueCard');
const Questions = require('./Question');
const Answers = require('./Answer');
const Locations = require('./Location');

Questions.hasMany(Answers, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
  });

  Answers.belongsTo(Questions, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
  });

  Answers.hasMany(Locations, {
    foreignKey: 'answer_id',
    onDelete: 'CASCADE'
  });
  
  Answers.belongsTo(Questions, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
  });
  
  module.exports = { Card, ContinueCard, Questions, Answers, Locations };