'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1,
        teaId: 1,
      },
      {
        userId: 1,
        teaId: 2,
      },
      {
        userId: 1,
        teaId: 3,
      },
      {
        userId: 1,
        teaId: 4,
      },
      {
        userId: 1,
        teaId: 5,
      },
      {
        userId: 2,
        teaId: 2,
      },
      {
        userId: 2,
        teaId: 3,
      },
      {
        userId: 2,
        teaId: 1,
      },
      {
        userId: 3,
        teaId: 2,
      },
      {
        userId: 3,
        teaId: 3,
      },
      {
        userId: 3,
        teaId: 4,
      },
      {
        userId: 4,
        teaId: 1,
      },
      {
        userId: 4,
        teaId: 2,
      },
      {
        userId: 4,
        teaId: 3,
      },
      {
        userId: 4,
        teaId: 4,
      },
      {
        userId: 5,
        teaId: 5,
      },
      {
        userId: 5,
        teaId: 6,
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});

  }
};
