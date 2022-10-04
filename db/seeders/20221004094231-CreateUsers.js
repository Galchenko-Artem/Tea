const bcrypt = require('bcrypt');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John',
          email: 'John@gmail.com',
          password: await bcrypt.hash('123', 10),
          favorite_tea_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Artem',
          email: 'Artem@gmail.com',
          password: await bcrypt.hash('qwer', 10),
          favorite_tea_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Anna',
          email: 'Anna@gmail.com',
          password: await bcrypt.hash('asdf', 10),
          favorite_tea_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Igor',
          email: 'Igor@gmail.com',
          password: await bcrypt.hash('zxcv', 10),
          favorite_tea_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Julia',
          email: 'Julia@gmail.com',
          password: await bcrypt.hash('1310', 10),
          favorite_tea_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
