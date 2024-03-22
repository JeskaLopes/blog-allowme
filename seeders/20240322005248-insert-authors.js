'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Sophie Hawk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicholas Jordan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zinnia Rickard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  }
};
