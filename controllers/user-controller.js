const { User, Thought } = require('../models');

const userController = {

    // Finds all the Users
    getUsers(req,res) {
       User.find()

        .then(userData => res.json(userData))

        .catch(err => {
           console.log(err);
           res.status(500).json(err);
        });
    },

    getSingleUser(req, res) {
    
    },

    createUser(req, res) {

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