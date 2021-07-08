'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  challenge.init({
    id: {
     type: DataTypes.UUID,
     allowNull: false,
     primaryKey: true,
     defaultValue:DataTypes.UUIDV4,
    
    },
    title: {
      allowNull: false,
      type:DataTypes.STRING
    },

    description: {
      allowNull: false,
      type:DataTypes.STRING
    },
    completed: {
      allowNull: false,
      type:DataTypes.BOOLEAN
    },
    tag: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'challenge',
  });
  return challenge;
};