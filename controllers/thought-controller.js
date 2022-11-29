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

                if (!thoughtData) {
                    res.status(404).json({ message: 'No Thoughts found! What are you thinking?' })
                    return;
                }

                res.json(thoughtData)
            })

            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    },

    // Creates a Thought and adds it to a User
    createThought(req, res) {
        Thought.create(req.body)

            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })

            .then(thoughtData => {

                if (!thoughtData) {
                    res.status(404).json({ message: 'No User found!' })
                    return;
                }

                res.json(thoughtData)
            })

            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })

    },

    // Update a Thought within the Database
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.params.body },
            { new: true ,runValidators: true }
         )
 
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

    deleteThought(req, res) {

    },

    addReaction(req, res) {

    },

    removeReaction(req, res) {

    }
};

module.exports = thoughtController;