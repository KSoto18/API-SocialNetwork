const { Thought, User } = require('../models');

const thoughtController = {

    // Find all Thoughts
    getThoughts(req, res) {
        Thought.find({})

        .then(thoughtData => res.json(thoughtData))

        .catch(err => {
           console.log(err);
           res.status(500).json(err);
        });
    },

    getSingleThought(req, res) {

    },

    createThought(req, res) {

    },

    updateThought(req, res) {

    },

    deleteThought(req, res) {

    },

    addReaction(req, res) {

    },

    removeReaction(req, res) {

    }
};

module.exports = thoughtController;