const db = require("../models");
const router = require("express").Router();



router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((workoutDB) => {
        res.json(workoutDB)
    })
    .catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts", (req, res) => {
    
});

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true}))
    .then((workoutDB) => {
        res.json(workoutDB);
    })
    .catch(err => {
        res.json(err)
    })
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then((workoutDB) => {
        res.json(workoutDB)
    })
    .catch(err => {
        res.json(err)
    })
});



module.exports = router;