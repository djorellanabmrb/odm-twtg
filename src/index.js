const mongoose = require('mongoose');
const { MongoConfig } = require("configs-twtg");
const _getUri = () => "mongodb://" +
    `${MongoConfig.username}:` +
    `${MongoConfig.password}@` +
    `${MongoConfig.host}:` +
    `${MongoConfig.port}/` +
    `${MongoConfig.database}`;

class TwtgOdm{
    constructor(){
        this.db = require("./models");
    }

    async connect(){
        try {
            console.log(_getUri())
            await mongoose.connect(_getUri(),
            { useNewUrlParser: true, useUnifiedTopology: true });   
        } catch (error) {
            console.log(error.message)            
        }
    }
}

module.exports = TwtgOdm;