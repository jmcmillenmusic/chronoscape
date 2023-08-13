const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answerchoice1: {
      type: DataTypes.TEXT,
    },
    answerchoice2: {
        type: DataTypes.TEXT,
      },
      answerchoice3: {
        type: DataTypes.TEXT,
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'question',
          key: 'id',
        }
      }
    },
    
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'answer',
  }
);
module.exports = Answer;