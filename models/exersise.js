const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExersiseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Need to know what type of exersise this is!"
    },

    name: {
        type: String,
        trim: true,
        required: "Need to know the name of the exersise!"
    },

    duration: {
        type: Number
    },

    weight: {
        type: Number
    },

    reps: {
        type: Number
    },

    sets: {
        type: Number
    }
});

const Excersise = mongoose.model("Exersise", ExersiseSchema);

module.exports = Excersise;