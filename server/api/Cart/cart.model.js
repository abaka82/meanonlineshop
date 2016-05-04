'use strict';

//import mongoose from 'mongoose';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var CartSchema = new mongoose.Schema({
  Product: { type: Schema.Types.ObjectId, ref: 'Product' },
  User: { type: Schema.Types.ObjectId, ref: 'User' },
  Qty: Number
});

export default mongoose.model('Cart', CartSchema);
