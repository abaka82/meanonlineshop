'use strict';

//import mongoose from 'mongoose';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CartSchema = new mongoose.Schema({
  Email: String,
  ISBN: String,
  Productid: String,
  Qty: Number
});

export default mongoose.model('Cart', CartSchema);
