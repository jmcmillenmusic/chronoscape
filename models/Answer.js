const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Answer extends Model { }

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answerChoice: {
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
    parent_answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'answer',
        key: 'id',
      }
    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'answer',
  }
);


module.exports = Answer;