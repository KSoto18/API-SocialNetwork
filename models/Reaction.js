const { Schema, model } = require('mongoose');

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

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;