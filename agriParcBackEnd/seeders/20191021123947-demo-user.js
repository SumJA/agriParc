'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nom: 'Gerard',
      prenom: 'Dupond',
      pseudo: 'Gerardoux',
      email: 'gerardoux@todo.com',
      password: 'Gerardoux',
      gaec_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
