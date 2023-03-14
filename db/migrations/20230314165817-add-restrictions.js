'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts', 'img_src', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('posts', 'status', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING(150),
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'phoneNumber', {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'gender', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'role', {
      type: Sequelize.BOOLEAN,
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
