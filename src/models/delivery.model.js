const mongoose = require('mongoose');
const {pointType} = require("./types")
let deliverySchema = new mongoose.Schema({
    address: {
        type: String,
    },
    aliasId: {
        type: String,
        required: true,
    },
    branchId: {
        type: String,
        required: true,
    },
    companyId:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
    },
    cancelledAt: {
        type: Date,
    },
    customerName: {
        type: String,
    },
    alertId: {
        type: String,
    },
    locationEnd: pointType,
    locationRef: pointType,
    orderId: {
        type: String,
    },
    note: {
        type: String,
    },
    pictureStart: {
        type: String,
    },
    recievedPic: {
        type: String,
    },
    statusId: {
        type: String,
    },
    updatedAt: {
        type: Date
    },
    deliveredAt: {
        type: Date,
        required: true,
    }
  });

  module.exports = mongoose.model('Deliveries', deliverySchema)