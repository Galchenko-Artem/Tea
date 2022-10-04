'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tea, User }) {
      Comment.belongsTo(Tea, { foreignKey: 'tea_id' })
      Comment.belongsTo(User, { foreignKey: 'user_id' })

      // define association here
    }
  }
  Comment.init({
    body: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    tea_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};