module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'Пуэр',
        descriptions: 'постферментированный чай, считается одним из самых дорогих сортов чая в мире',
        location: 'Китай',
        imgLink: '/img/puer.jpg',
      }, {
        title: 'Ройбуш',
        descriptions: 'Африканский красный рассыпной листовой чай',
        location: 'Южная Африка',
        imgLink: '/img/roybush.jpg',
      }, {
        title: 'Bubble Tea',
        descriptions: 'Стал мировым феноменом, корни которого произрастают из Тайваня',
        location: 'Тайвань',
        imgLink: '/img/buble.jpg',
      }, {
        title: 'матча',
        descriptions: 'японский порошковый зеленый чай',
        location: 'Япония',
        imgLink: '/img/matcha.jpeg',
      }, {
        title: 'масала',
        descriptions: 'напиток родом с Индийского субконтинента',
        location: 'Индия',
        imgLink: '/img/masala.jpg',
      }, {
        title: 'часуйма',
        descriptions: 'Тибетский чай часуйма изготавливается из китайского прессованного пуэра чай',
        location: 'Тибет',
        imgLink: '/img/chasuyma.jpg',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Teas', null, {});
  }
};