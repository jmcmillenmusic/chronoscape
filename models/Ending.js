const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ending extends Model {}

Ending.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      endingType: {
        type: DataTypes.TEXT,
      },
      endingText: {
        type: DataTypes.TEXT,
      }
    },
  
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      modelName: 'ending',
    }
);
  
module.exports = Ending;