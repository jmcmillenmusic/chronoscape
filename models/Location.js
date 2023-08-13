const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location1: {
      type: DataTypes.TEXT,
    },
    location2: {
        type: DataTypes.TEXT,
      },
      location3: {
        type: DataTypes.TEXT,
      },
      answer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'answer',
          key: 'id',
        }
      },
    },
    
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);
module.exports = Location;