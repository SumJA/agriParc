const express = require('express');
const router = express.Router();
const userMiddleware = require('../middlewares/users');

/* GET users listing. */
router.get('/', userMiddleware.findAll);

/* GET users listing. */
router.get('/:id', userMiddleware.findById);

/* GET users listing. */
router.put('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
