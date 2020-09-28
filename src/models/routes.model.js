const mongoose = require('mongoose');
const {pointType} = require("./types")
let routeSchema = new mongoose.Schema({
    idRoute:{
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    }, 
    sucursal: {
        type: String,
        required: false,
    },
    alert: {
        type: String,
        required: false
    },
    biker: {
        type: String,
        required: false
    },
    location: pointType,
    createdAt:{
        type: Date,
        required: false
    }
  });

  module.exports = mongoose.model('Routes', routeSchema)