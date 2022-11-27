const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minLength: 1,
            maxLength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: dateFormat
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
        //WORKING ON THIS
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

//WORKING ON THIS
const reactionSchema = new Schema(
    {


    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }

);


//virtual reaction count

const Thought = model('Thought', thoughtSchema);

model.exports = Thought;