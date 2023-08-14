const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { }

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    locationTitle: {
      type: DataTypes.TEXT,
    },
    locationData: {
      type: DataTypes.TEXT,
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    timestamps: false,
    modelName: 'location',
  }
);
module.exports = Location;