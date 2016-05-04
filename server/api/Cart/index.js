'use strict';

var express = require('express');
var controller = require('./cart.controller');
var multiparty = require('connect-multiparty');
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/:id/searchByUser', controller.searchCartByUser);
router.get('/:id/searchByProduct', controller.searchCartByProduct);

module.exports = router;
