const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)

router
  .route('/:id')
  .get(controller.getOne)

module.exports = router