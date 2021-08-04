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

router.post("/api/workouts", (req, res) => {

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