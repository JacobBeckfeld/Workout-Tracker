const db = require("../models");
const router = require("express").Router();



router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((workoutDB) => {
        res.json(workoutDB)
        // console.log(workoutDB)
    })
    .catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id", ( req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id},
        {$push: {exercises: req.body}}, {new: true}
    )
    .then(workoutDB => {
        res.json(workoutDB)
    }).catch(err => {
        res.json(err)
    })
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then((workoutDB => {
        res.json(workoutDB)
        console.log(workoutDB)
    }))
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