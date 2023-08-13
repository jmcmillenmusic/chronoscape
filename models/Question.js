const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.TEXT,
    },
    },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
  },

);



// Question.associate = ( models ) =>{ Question.hasMany( models.answer, { foreignKey: 'answer.id', sourceKey: 'id' } ); };

module.exports = Question;