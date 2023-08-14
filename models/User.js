const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mpf: {
        type: DataTypes.INTEGER,
    },
    traveler: {
        type: DataTypes.INTEGER,
    },
    void: {
        type: DataTypes.INTEGER,
    },
    },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'user',
  },

);


module.exports = User;