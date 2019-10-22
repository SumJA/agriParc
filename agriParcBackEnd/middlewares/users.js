const users = require('../models/index').User;

const findAll = (req, res, next) => {
    users.findAll()
        .then(allUsers => {
            res.status(200).json(allUsers);
        })
        .catch(next);
};

const findById = (req, res, next) => {
    users.findOne()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(next);
};

const update = (req, res, next) => {
    users.findOne()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(next);
};

module.exports = { findAll, findById } ;