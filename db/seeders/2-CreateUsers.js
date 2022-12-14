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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Artem',
          email: 'Artem@gmail.com',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Anna',
          email: 'Anna@gmail.com',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Igor',
          email: 'Igor@gmail.com',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Julia',
          email: 'Julia@gmail.com',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Biba',
          email: 'Biba@gmail.com',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Boba',
          email: 'Boba@gmail.com',
          password: await bcrypt.hash('123', 10),
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
