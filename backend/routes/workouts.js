const express = require("express");
const  {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const requireAuth = require('../middleware/requireAuth')


const router = express.Router()


//requireAuth for all workout routes 
router.use(requireAuth)




//get all workouts
router.get('/',getWorkouts)

// get single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/', createWorkout)


//delete a workout
router.delete('/:id',deleteWorkout)


//update a workout
router.patch('/:id',updateWorkout)



module.exports = router