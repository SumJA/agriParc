'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adresse = sequelize.define('Adresse', {
    numeroVoie: DataTypes.INTEGER,
    libelle: DataTypes.STRING,
    complementAdresse: DataTypes.STRING,
    codePostal: DataTypes.STRING,
    ville: DataTypes.STRING,
    pays: DataTypes.STRING
  }, {});
  Adresse.associate = function(models) {
    // associations can be defined here
  };
  return Adresse;
};