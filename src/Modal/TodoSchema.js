const mongoose = require('mongoose');

// Create a schema for the "Todo" collection
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// Create a model for the "Todo" collection using the schema
module.exports = mongoose.model('Todo', todoSchema);;
