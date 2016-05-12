/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/products              ->  index
 * POST    /api/products              ->  create
 * GET     /api/products/:id          ->  show
 * PUT     /api/products/:id          ->  update
 * DELETE  /api/products/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Product from './product.model';

var path = require('path');
var logger = require('../../components/logger');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}
/*
function saveFile(res, file) {
  return function(entity){
    var newPath = '/assets/uploads/' + path.basename(file.path);
    entity.imageUrl = newPath;
    logger.debug('entity : '+JSON.stringify(entity));
    return entity.saveAsync().spread(function(updated, numberAffected) {
      logger.debug('updated : '+JSON.stringify(updated));
      logger.debug('numberAffected : '+numberAffected);
      return updated;
    });
  }
}
*/
function saveFile(res, file) {
  logger.debug("Product.controller - saveFile function");
  return function(entity){
    for (var i = 0; i<file.length; i++) {
      
       var newPath = '/assets/uploads/product/' + path.basename(file[i].path);
       if (i == 0){
        entity.imageUrl1 = newPath; 
         logger.debug("Product.controller - simpant file ke entity 1: " + file[i].path);
       }else if (i == 1){
        entity.imageUrl2 = newPath; 
          logger.debug("Product.controller - simpant file ke entity 2: " + file[i].path);
        }else if (i == 2){
        entity.imageUrl3 = newPath; 
          logger.debug("Product.controller - simpant file ke entity 3: " + file[i].path);
       }else if (i == 3){
        entity.imageUrl4 = newPath; 
          logger.debug("Product.controller - simpant file ke entity 4: " + file[i].path);
       }else if (i == 4){
        entity.imageUrl5 = newPath; 
          logger.debug("Product.controller - simpant file ke entity 5: " + file[i].path);
       };
    }
           
  

    logger.debug("Product.controller - entity: " + JSON.stringify(entity));
    logger.debug("Product.controller - imageUrl: " + entity.imageUrl);
    
    return entity.save()
      .then(updated => {
        return updated;
      });
  }
}


// Gets a list of Products
export function index(req, res) {
  return Product.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Product from the DB
export function show(req, res) {
  return Product.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Product in the DB
export function create(req, res) {
  return Product.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Uploads a new Product's image in the DB
export function upload(req, res) {
  logger.debug("Product.controller - Upload function");
  var file = req.files.file;
  if(!file){
    return handleError(res)('File not provided');
  }

  return Product.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveFile(res, file))
    .then(respondWithResult(res))
    .catch(handleError(res));
};

// Updates an existing Product in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Product.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Product from the DB
export function destroy(req, res) {
  return Product.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}