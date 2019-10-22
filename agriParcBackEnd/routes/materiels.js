var express = require('express');
var router = express.Router();
const UserMiddlewares = require('../middlewares/materiel')

/* GET materiels listing. */
router.get('/', UserMiddlewares.findAllMateriel);

router.post('/pret', UserMiddlewares.createNewMateriel);

module.exports = router;