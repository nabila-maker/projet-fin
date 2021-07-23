'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userChallenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user,{foreignKey:"user_id"});
      this.belongsTo(models.challenge,{foreignKey:"challenge_id"})
    }
  };
  userChallenge.init({
    id: {
      type:DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    
    },
    user_id: {
      allowNull: false,
      type:DataTypes.UUID,
      references: {
        model: "user",
        key:"id",
      }
      
    },
    challenge_id: {
      allowNull: false,
      type:DataTypes.UUID,
      references: {
        model: "challenge",
        key:"id",
      }
    },
    date: {
      type:DataTypes.DATEONLY
    },
    status: {
      type:DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'userChallenge',
  });
  return userChallenge;
};