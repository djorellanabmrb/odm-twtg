const mongoose = require('mongoose');

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
    branchOffice: {
        type: String,
        required: false,
    },
    branchOfficeId: {
        type: String,
        required: false,
    },
    available: {
        type: Boolean,
        default: true
    }, 
    status: {
        type: String,
        enum: ["NEW", "QUEUE", "CHECKING", "UNABLE", "ABLE"],
        default: "NEW"
    }
  });

  module.exports = mongoose.model('Users', userSchema)