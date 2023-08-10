const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ContinueCard extends Model {}

ContinueCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'continueCard',
  }
);
module.exports = ContinueCard;