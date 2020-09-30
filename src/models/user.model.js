const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
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
    companyId: {
        type: String,
        required: false
    }, 
    SUCURSAL: {
        type: String,
        required: false,
    },
    branchOfficeId: {
        type: String,
        required: false,
    },
  });

  module.exports = mongoose.model('Users', userSchema)