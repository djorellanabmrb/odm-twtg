const mongoose = require('mongoose');
let controllerSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    }, 
    companyId: {
        type: String,
        required: false
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
    active: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum : ['ADMIN', 'CUSTOMER_SERVICE', 'OPERATIVE'],
        default: 'CUSTOMER_SERVICE'
    }
  });

  module.exports = mongoose.model('Controllers', controllerSchema)
