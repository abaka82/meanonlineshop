'use strict';

//import mongoose from 'mongoose';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  ISBN: {
    type: String,
    unique: 'The specified ISBN is already in use.'
  },
  Title: String,
  Author: String,
  Description: String,
  Category: String,
  Image: String,
  Price: Number,
  Stock: Number,
  Status: String,
  imageUrl1: String,
  imageUrl2: String,
  imageUrl3: String,
  imageUrl4: String,
  imageUrl5: String,
  mainImage: Number,
  CreationDate: {type: Date, default: Date.now}
});

// Validate ISBN is not taken
/*ProductSchema
  .path('ISBN')
  .validate(function(value, respond) {
    var self = this;
    return this.constructor.findOneAsync({ ISBN: value })
      .then(function(product) {
        if (product) {
          if (self.id === product.id) {
            return respond(true);
          }
          return respond(false);
        }
        return respond(true);
      })
      .catch(function(err) {
        throw err;
      });
  }, 'The specified ISBN is already in use.');*/

export default mongoose.model('Product', ProductSchema);
