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

    // Find a single Thought withing the Database
    getSingleThought(req, res) {
        Thought.findOne({
            _id: req.params.thoughtId
        })

        .populate('reactions')

        .then(thoughtData => {
            
            if(!thoughtData) {
                res.status(404).json({message: 'No Thoughts found! What are you thinking?'})
                return;
            }

            res.json(thoughtData)
        })
          
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })

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