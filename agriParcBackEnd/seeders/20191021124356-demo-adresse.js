'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Adresses', [{
      numeroVoie: 15,
      libelle: 'demo adresse libelle',
      complementAdresse: null,
      codePostal: '01562',
      ville: 'paris',
      pays: 'france',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    //TODO
    return queryInterface.bulkDelete('Adresses', null, {});
  }
};
