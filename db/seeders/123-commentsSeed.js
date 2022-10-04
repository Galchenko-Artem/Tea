module.exports = {
    up: async (queryInterface, Sequelize) => {
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
      */
      await queryInterface.bulkInsert('Comments', [
        {
          body: 'Чудесный чай',
          user_id: 1,
          tea_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            body: 'Чай мне очень понравился, всем советую!!!!',
            user_id: 2,
            tea_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            body: 'Хорошо заваривается и очень приятный вкус',
            user_id: 1,
            tea_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            body: 'Очень приятный аромат, и неповторимый вкус',
            user_id: 2,
            tea_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            body: 'Очень изысканый вкус',
            user_id: 3,
            tea_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
       
      ], {});
    },
    down: async (queryInterface, Sequelize) => {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
      await queryInterface.bulkDelete('Comments', null, { restartIdentity: true, truncate: true });
    },
  };
  