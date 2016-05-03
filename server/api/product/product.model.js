'use strict';

//import mongoose from 'mongoose';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  ISBN: String,
  Title: String,
  Author: String,
  Description: String,
  Category: String,
  Image: String,
  Price: Number,
  Stock: Number,
  Status: String,
  imageUrl: String
});

export default mongoose.model('Product', ProductSchema);
