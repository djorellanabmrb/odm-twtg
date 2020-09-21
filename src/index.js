const mongoose = require('mongoose');

const _configs = {
    username: "",
    password: "",
    host: "",
    port: "",
    database: ""
};

const _getUri = () => "mongodb://" +
    `${_configs.username}:` +
    `${_configs.password}@` +
    `${_configs.host}:` +
    `${_configs.port}/` +
    `${_configs.database}`;

class TwtgOdm{
    constructor(configdb){
        const jsv = require("json-validator");
        const {configValidator} = require("./validators");
        const validators = jsv.validate(configdb, configValidator);
        if(validators.length > 0)
            throw new Error(validators);
        _configs.database  = configdb.database;
        _configs.host  = configdb.host;
        _configs.password  = configdb.password;
        _configs.username  = configdb.username;
        _configs.port  = configdb.port;
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