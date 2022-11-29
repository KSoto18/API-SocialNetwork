const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = (date) => new Date(date).toLocaleString();

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
            get: timestamp => dateFormat(timestamp)
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
    },

    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);


// Virtual Count
thoughtSchema
  .virtual('reactionsCount')
  .get(function () {
    return this.reactions.length;
  });


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;