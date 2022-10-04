'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, User }) {
      this.hasMany(Comment), { foreignKey: 'tea_id' }
      this.belongsTo(User), { foreignKey: 'tea_id' }
    }
  }
  Tea.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    imgLink: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Tea',
    timestamps: false,
  });
  return Tea;
};