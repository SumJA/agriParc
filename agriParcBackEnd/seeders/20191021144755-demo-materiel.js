'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materiels', [{
      user_id: 1,
      type: 'Moissonneuse',
      model: 'XF-54-DEA-DA',
      photo: '',
      description: 'Grosse moissonneuse',
      disponibiliteDebut: new Date('2019-10-21T03:24:00'),
      disponibiliteFin: new Date('2019-10-25T03:24:00'),
      localisation: "",
      status: "En location",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Materiels', null, {});
  }
};
