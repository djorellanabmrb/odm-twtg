const mongoose = require('mongoose');
const {pointType} = require("./types")
let deliverySchema = new mongoose.Schema({
    address: {
        type: String,
    },
    alert: {
        type: String,
        enum : ['En Tiempo','Verificar','Por llegar Tarde', 'Tarde'],
        default: 'En Tiempo'
    },
    alias:{
        id:{
            type: String
        },
        name:{
            type: String
        }
    },
    branch:{
        address:{
            type: String
        },
        id: {
            type: String
        },
        point: pointType,
        name:{
            type: String
        }
    },
    circle:{
        distance: {
            type: Number
        },
        id:{
            type: Number
        },
        time: {
            type: Number
        }
    },
    company:{
        id: {
            type: String
        }, 
        name: {
            type: String
        }
    },
    distanceTraveled:{
        type: Number
    },
    locationEnd:pointType,
    locationRef:pointType,
    name:{
        type: String
    },
    nota:{
        type: String
    },
    orderId:{
        type: String
    },
    orderPic:{
        type: String
    },
    phone: {
        type: String
    },
    provider: {
        type: String,
        enum : ['app', 'ecommerce', 'controller', 'branch'],
        default: 'app'
    },
    receivedPic:{
        type: String
    },
    statusTimes:{
        'En ruta': {
            type: Date
        },
        'Aceptado': {
            type: Date
        },
        'En cola': {
            type: Date
        },
        'Cancelado': {
            type: Date
        },
        'Entregado': {
            type: Date
        },
        'Pendiente': {
            type: Date
        }
    },
    
    status : {
        type: String,
        enum : ['Entregado', 'Cancelado'],
        default: 'Entregado'
    },
    time: {
        type: Number
    },
    rating: {
        calification:{type: Number},
        opinion: {type: String}
    },
    depto:{
        name:{
            type: String
        },
        id: {
            type: Number
        }
    },
    muni: {
        name:{
            type: String
        },
        id: {
            type: Number
        }
    },
    zone: {
        name:{
            type: String
        },
        id: {
            type: Number
        }
    },
    orderObservations:{
        type: String
    },
    modifiedBy:{
        name: {type: String},
        id: {type: String}
    }
  });

  module.exports = mongoose.model('Deliveries', deliverySchema)