const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    answerChoice1: {
      type: DataTypes.TEXT,

    },
    answerChoice2: {
      type: DataTypes.TEXT,
    },
    answerChoice3: {
      type: DataTypes.TEXT,
    }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'card',
  }
);
module.exports = Card;