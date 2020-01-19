var mongoose = require('mongoose')

const ticketreserved = mongoose.model('ticketreserved', {
    
    numberofseats: {
        type: Number
    },
    userid: {
        type: Object
    },
    showid: {
        type: Object
    },
})


module.exports = ticketreserved