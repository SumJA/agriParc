var express = require('express');
var router = express.Router();
const UserMiddlewares = require('../middlewares/materiel')

/* GET materiels listing. */
router.get('/', UserMiddlewares.findAllMateriel);

/* GET materiels of a user. */
router.get('/:id', UserMiddlewares.findUserMateriels);

router.post('/pret', UserMiddlewares.createNewMateriel);

module.exports = router;