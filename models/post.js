'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Post.hasOne(models.User, { foreignKey: "iduser", as: 'puser', onDelete: 'cascade' });
      models.Post.hasMany(models.Tag, { foreignKey: "idtag", as: 'ptag' });
    }
  };
  Post.init({
    idpost: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idtag: DataTypes.INTEGER,
    iduser: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};