const { Schema, types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//WORKING ON THIS
const reactionSchema = new Schema(
    {
        reactionId: {

        },

        reactionBody: {

        },

        username: {

        },

        createdAt: {

        }

    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }

);

module.exports = reactionSchema;