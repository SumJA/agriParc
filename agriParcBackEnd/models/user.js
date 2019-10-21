'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Materiel, { as: user_id });
  };
  return User;
};