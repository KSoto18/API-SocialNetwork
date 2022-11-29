const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// Thought Route = /api/thoughts

router.route('/')
  .get(getThoughts)
  .post(createThought);


// Single Thought Route = /api/thoughts/

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


// Add A Reactions Route = /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions')
  .post(addReaction)
 
// Remove a Reaction Route

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)


module.exports = router;