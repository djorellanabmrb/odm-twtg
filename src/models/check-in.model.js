const mongoose = require('mongoose');

let checkInSchema = new mongoose.Schema({
    uidBiker:{
        type: String,
        required: true
    },
    firstNameBiker:{
        type: String,
        required: false
    },
    lastNameBiker:{
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    }, 
    companyId: {
        type: String,
        required: false
    }, 
    branchOffice: {
        type: String,
        required: false,
    },
    branchOfficeId: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    updatedAt: {
        type: Date,
        default: Date.now
    },
  }
);

  module.exports = mongoose.model('CheckIns', checkInSchema)