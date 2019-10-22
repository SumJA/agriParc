'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Materiel, { foreignKey: 'user_id' });
    User.hasMany(models.Adresse, { foreignKey: 'user_id' }); 
  };
  return User;
};