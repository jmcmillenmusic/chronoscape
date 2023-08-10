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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerChoice1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerChoice2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerChoice3: {
      type: DataTypes.STRING,
      allowNull: false,
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