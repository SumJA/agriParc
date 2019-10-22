'use strict';

module.exports = (sequelize, DataTypes) => {
  const Gaec = sequelize.define('Gaec', {
    nom: DataTypes.STRING
  }, {});
  Gaec.associate = (models) => {
    // associations can be defined here
    Gaec.hasMany(models.User, { foreignKey : 'gaec_id'});
  };
  return Gaec;
};