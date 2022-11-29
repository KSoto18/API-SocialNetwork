const { User, Thought } = require('../models');

const userController = {

    // Finds all the Users
    getUsers(req,res) {
       User.find({})

        .then(userData => res.json(userData))

        .catch(err => {
           console.log(err);
           res.status(500).json(err);
        });
    },

     //Find User by ID
     getSingleUser(req, res) {
        User.findOne({
            _id: req.params.userId
        })

        .populate('friends')
        .populate('thoughts')

        .then(userData => {
            
            if(!userData) {
                res.status(404).json({message: 'No user found!'})
                return;
            }

            res.json(userData)
        })
          
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    },

    // Add a new User to the Database
    createUser(req, res) {
        User.create(req.body)

        .then(userData => res.json(userData))

        .catch(err => {
           console.log(err);
           res.status(500).json(err);
        });
    },

    updateUser(req, res) {

    },

    deleteUser(req, res) {

    },

    addFriend(req, res) {

    },

    removeFriend(req, res) {

    }

};

module.exports = userController;