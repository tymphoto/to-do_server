const Bcrypt = require('../../utils/bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@mail.ru',
        password: await Bcrypt.hash('123'),
      },
      {
        name: 'bla',
        email: 'bla@mail.ru',
        password: await Bcrypt.hash('123'),
      },
      {
        name: 'Will',
        email: 'w@w.ww',
        password: await Bcrypt.hash('123'),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
