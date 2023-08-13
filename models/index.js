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
    foreignKey: 'parent_answer_id', // Rename to reflect parent-child relationship
    onDelete: 'CASCADE',
    as: 'ChildAnswers' // Define an alias for the child answers
});

Answers.belongsTo(Answers, {
    foreignKey: 'parent_answer_id', // Rename to reflect parent-child relationship
    onDelete: 'CASCADE'
});

Answers.hasOne(Location, {
    foreignKey: 'answer_id', // Use answer_id as the foreign key in Location
    onDelete: 'CASCADE'
});

Location.belongsTo(Answers, {
    foreignKey: 'answer_id', // Use answer_id as the foreign key in Location
    onDelete: 'CASCADE'
});

module.exports = { Card, ContinueCard, Questions, Answers, Location }; // Fix typo: Location, not Locations