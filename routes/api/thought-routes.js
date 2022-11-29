const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

// Thought Route = /api/thoughts

router.route('/')
  .get(getThoughts)
  .post(createThought);


// Single Thought Route = /api/thoughts/
//needs work
router.route('/')
   .get(getSingleThought)
   .put(updateThought)
   .delete(deleteThought);


module.exports = router;