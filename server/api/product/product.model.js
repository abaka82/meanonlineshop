'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  Title: String,
  Author: String,
  Description: String,
  Category: String,
  Image: String,
  Price: Number,
  Stock: Number,
  Status: String
});

export default mongoose.model('Product', ProductSchema);
