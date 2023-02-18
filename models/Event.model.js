const { Schema, model } = require('mongoose')

const eventSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
        minlength: 10,
    },

    organizer: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    dimension: {
        type: String,
        enum: ['Dimension C-137', 'Post-Apocalyptic Dimension', 'Replacement Dimension', 'Cronenberg Dimension', 'Testicle Monster Dimension'],
    },

    location: {

        required: true,
        type: {
            type: String
        },

        coordinates: [Number]
    }
},
    {
        timestamps: true
    }

)

const Event = model('Event', eventSchema)

module.exports = Event