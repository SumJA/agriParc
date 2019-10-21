'use strict';
module.exports = (sequelize, DataTypes) => {
  const Materiel = sequelize.define('Materiel', {
    type: DataTypes.STRING,
    model: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.TEXT,
    disponibiliteDebut: DataTypes.DATE,
    disponibiliteFin: DataTypes.DATE,
    localisation: DataTypes.GEOMETRY
  }, {});
  Materiel.associate = function(models) {
    // associations can be defined here
  };
  return Materiel;
};