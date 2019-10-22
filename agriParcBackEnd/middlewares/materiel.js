const materiel = require("../models/index").Materiel;

const findAllMateriel = (req, res, next) => {
    materiel.findAll()
        .then(allMateriel => {
            res.status(200).json(allMateriel);
        })
        .catch(next);
};

const findUserMateriels = (req, res, next) => {
    const userId = req.params.id;
    materiel.findAll({
        where: {
            user_id: userId
        }
    }).then(userMateriels => { //TODO : case no material found
        if (userMateriels.length === 0) {
            res.status(204).json();
            return;
        }
        res.status(200).json(userMateriels);
    }).catch(next);
};

const createNewMateriel = (req, res, next) => {
    materiel.create(req.body)
        .then(allMateriel => {
            res.status(200).json(allMateriel);
        })
        .catch(next);
};

module.exports = { findAllMateriel, createNewMateriel, findUserMateriels }