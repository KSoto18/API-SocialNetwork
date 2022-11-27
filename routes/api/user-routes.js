const router = require('express'),Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

// Route = /api/users

router.route('/')
  .get(getUsers)
  .post(createUser);


