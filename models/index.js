const Card = require('./Card');
const ContinueCard = require('./ContinueCard');
const Question = require('./Question'); // Updated model name
const Answer = require('./Answer'); // Updated model name
const Location = require('./Location');
const User = require('./User');
const Ending = require('./Ending');

Question.hasMany(Answer, {
  foreignKey: 'question_id',
  onDelete: 'CASCADE',
});

Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  onDelete: 'CASCADE',
});

Answer.hasMany(Answer, {
  foreignKey: 'parent_answer_id',
  onDelete: 'CASCADE',
  as: 'ChildAnswers',
});

Answer.belongsTo(Answer, {
  foreignKey: 'parent_answer_id',
  onDelete: 'CASCADE',
});

Answer.hasOne(Location, {
  foreignKey: 'answer_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(Answer, {
  foreignKey: 'answer_id',
  onDelete: 'CASCADE',
});

module.exports = { Card, ContinueCard, Question, Answer, Location, User, Ending };