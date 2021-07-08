'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userChallenges', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default:Sequelize.fn("uuid_generate_v4")
      },
      user_id: {
        
        type: Sequelize.UUID,
        allowNull: false
      },
      challenge_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userChallenges');
  }
};