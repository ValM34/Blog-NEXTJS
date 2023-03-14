'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('comments', 'title', {
      type: Sequelize.STRING(200),
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'firstName', {
      type: Sequelize.STRING(150),
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'lastName', {
      type: Sequelize.STRING(150),
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING(20),
      allowNull: false,
    });
    await queryInterface.changeColumn('posts', 'title', {
      type: Sequelize.STRING(200),
      allowNull: false,
    });
    await queryInterface.changeColumn('posts', 'chapo', {
      type: Sequelize.STRING(300),
      allowNull: false,
    });
    await queryInterface.changeColumn('posts', 'content', {
      type: Sequelize.STRING(3000),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
