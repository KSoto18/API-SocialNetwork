const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
           type: String,
           unique: true,
           required: true,
           trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: /^([a-z0-9._-]+)@([a-z0-9.]+)$/gm,
        },

        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought'
            },
        ],

        friends: [
            {
             type: Schema.Types.ObjectId
            },
        ],
    },

    {
    toJSON: {
        virtuals: true,
    },
     id: false,
  }

);

//virtual friendCount

const User = model('user', userSchema);

module.exports = User;