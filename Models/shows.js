var mongoose = require('mongoose')

const shows = mongoose.model('shows', {
    
    location: {
        type: String
    },
    performer: {
        type: String
    },
    seats: {
        type: Number
    },
    ticketrate:{
        type:Number
    },
    duration:
    {
        type:Number
    },
    date:{
        type:Date
    }
})


module.exports = shows