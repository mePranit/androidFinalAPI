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
    date:{
        type:Date
    },
    duration:
    {
        hours:Number
    }
})


module.exports = shows