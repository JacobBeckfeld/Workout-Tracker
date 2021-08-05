const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    
    date: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Need to know what type of exercise this is!"
            },
        
            name: {
                type: String,
                trim: true,
                required: "Need to know the name of the exercise!"
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
        }
    ]
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;