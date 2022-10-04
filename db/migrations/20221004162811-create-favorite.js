'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Добавляем ограничение первичный ключ
        references: {
          model: 'Users',
        },
      },
      teaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Добавляем ограничение первичный ключ
        references: {
          model: 'Teas',
        },
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favorites');
  }
};