'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.belongsTo(models.users, { foreignKey: { name: 'userId', field: 'user_id', allowNull: false } });
    }
  }
  posts.init({
    title: DataTypes.STRING,
    chapo: DataTypes.STRING,
    content: DataTypes.STRING,
    img_src: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};
