'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.users, { foreignKey: { name: 'userId', field: 'user_id', allowNull: false } });
      comments.belongsTo(models.posts, { foreignKey: { name: 'postId', field: 'post_id', allowNull: false } });
    }
  }
  comments.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};
