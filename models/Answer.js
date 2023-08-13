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
    answerchoice: {
      type: DataTypes.TEXT,
    },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'question',
          key: 'id',
        }
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'location',
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