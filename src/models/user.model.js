const mongoose = require('mongoose');
const {pointType} = require("./types");
let userSchema = new mongoose.Schema({
    uid:{
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
    phone: {
        type: String,
        required: false
    }, 
    address: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["NEW", "QUEUE", "CHECKING", "UNABLE", "ACTIVE", "INACTIVE"],
        default: "NEW"
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
    pushToken: {
        type: String,
        required: false    }
  });

  module.exports = mongoose.model('Users', userSchema)