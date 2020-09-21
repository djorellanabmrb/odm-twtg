module.exports ={
    type:{
        type: String,
        enum: ["Point"],
        default:"Point",
        require: true
    },
    coordinates: {
        type: [Number],
        validate: [(val) => val.length == 2, '{PATH} must have two values'],
        require: true
    }
}