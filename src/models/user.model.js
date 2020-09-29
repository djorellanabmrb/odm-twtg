const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
    },
    agente:{
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false
    }, 
    sucursal: {
        type: String,
        required: false,
    },
  });

  module.exports = mongoose.model('Users', userSchema)