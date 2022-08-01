module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        text: 'Create React app',
        status: 'not done',
        user_id: 1,
      },
      {
        text: 'Check all errors',
        status: 'not done',
        user_id: 1,
      },
      {
        text: 'Show my work to HR',
        status: 'not done',
        user_id: 1,
      },
      {
        text: 'Do not kill my self',
        status: 'not done',
        user_id: 1,
      },
      {
        text: 'Task for user_2',
        status: 'not done',
        user_id: 2,
      },
      {
        text: 'One more task for bla',
        status: 'not done',
        user_id: 2,
      },
      {
        text: 'Task for user_3',
        status: 'not done',
        user_id: 3,
      },
      {
        text: 'One more task for Ww',
        status: 'not done',
        user_id: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
