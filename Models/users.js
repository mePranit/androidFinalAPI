var mongoose = require('mongoose')

const users = mongoose.model('users', {
    
    gmail: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})


module.exports = users