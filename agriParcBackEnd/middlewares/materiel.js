const materiel = require("../models/index").Materiel;

const findAllMateriel = (req, res, next) => {
    materiel.findAll()
        .then(allMateriel => {
            res.status(200).json(allMateriel);
        })
        .catch(next);
};

const createNewMateriel = (req, res, next) => {
    materiel.create(req.body)
        .then(allMateriel => {
            res.status(200).json(allMateriel);
        })
        .catch(next);
};

module.exports = { findAllMateriel, createNewMateriel }